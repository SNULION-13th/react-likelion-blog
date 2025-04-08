// src/features/post/PostDialog.jsx

import { useState } from "react";

export const PostDialog = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags((prev) => [...prev, trimmed]);
      setTagInput("");
    }
  };

  const handleSubmit = () => {
    const postData = { title, content, tags };
    console.log("작성된 게시글:", postData);
    onClose(); // 등록 후 모달 닫기
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative shadow-lg text-left">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-1">게시글 작성</h2>
        <p className="text-sm text-gray-500 mb-4">
          게시글을 자유롭게 작성해보세요!
        </p>

        {/* 제목 입력 */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">제목</label>
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            className="w-full border-2 border-orange-400 px-3 py-2 rounded-md focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* 내용 입력 */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">내용</label>
          <textarea
            placeholder="내용을 입력해주세요"
            className="w-full border border-gray-300 px-3 py-2 rounded-md h-24 resize-none focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* 태그 입력 */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">태그</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="태그를 입력해주세요"
              className="flex-grow border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
            />
            <button
              onClick={handleAddTag}
              className="px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200"
            >
              태그 추가
            </button>
          </div>
        </div>

        {/* 태그 리스트 */}
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-orange-400 text-white text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* 등록 버튼 */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-md font-semibold"
        >
          등록
        </button>
      </div>
    </div>
  );
};
