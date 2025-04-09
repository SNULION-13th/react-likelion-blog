//TODO: 게시글 작성 모달 컴포넌트 구현

import { useState } from "react";
import { Button, Input } from "@/shared/components";

export const PostDialog = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (targetTag) => {
    setTags(tags.filter((tag) => tag !== targetTag));
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const postData = {
      title,
      content,
      tags,
    };

    console.log("postData", postData);

    onCreate(postData); // 부모(Home)에서 author와 함께 처리
    setTitle("");
    setContent("");
    setTags([]);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold">게시글 작성</h2>
            <h3 className="text-sm text-gray-500">
              게시글을 자유롭게 작성해보세요!
            </h3>
          </div>
          <button onClick={onClose} className="text-xl font-bold">
            ✖
          </button>
        </div>

        {/* 제목 */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-left">제목</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />
        </div>

        {/* 내용 */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-left">내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
            className="w-full border rounded-md p-2 h-32 resize-none"
          />
        </div>

        {/* 태그 */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-left">태그</label>
          <div className="flex gap-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="태그를 입력해주세요"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
            />
            <Button type="button" onClick={handleAddTag}>
              태그 추가
            </Button>
          </div>

          {/* 태그 목록 */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center bg-yellow-200 text-black px-3 py-1 rounded-lg"
              >
                <span className="mr-2">#{tag}</span>
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="text-black hover:text-red-600 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex justify-center mt-6">
          <Button onClick={handleSubmit}>등록</Button>
        </div>
      </div>
    </div>
  );
};
