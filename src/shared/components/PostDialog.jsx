import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button.jsx" 

import { useState } from "react";

export  function PostDialog({ onClose, onCreatePost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (removeTag) => {
    setTags(tags.filter((tag) => tag !== removeTag));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!title.trim() || !content.trim()) return;
  
    const newPost = {
      title,
      content,
      tags,
    };
  
    onCreatePost(newPost);
    onClose();
  };
  

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent >
        {/* 헤더 */}
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
          <DialogDescription>
            게시글을 자유롭게 작성해보세요!
          </DialogDescription>
        </DialogHeader>
        {/* 폼 */}
        <form className="space-y-4 mt-4">
          {/* 제목 */}
          <div>
            <label className="block text-left font-medium mb-1">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              className="w-full border border-gray-300 hover:border-amber-400 rounded-lg px-4 py-2 shadow-sm focus:outline-none"
            />
          </div>

          {/* 내용 */}
          <div>
            <label className="block text-left font-medium mb-1">내용</label>
            <textarea
              value={content}
              placeholder="내용을 입력해주세요"
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 hover:border-amber-400 rounded-lg px-4 py-2 h-32 focus:outline-none shadow-sm"
            />
          </div>

          {/* 태그 */}
          <div>
            <label className="block text-left font-medium mb-1">태그</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="태그를 입력해주세요"
                className="flex-1 border border-gray-300 hover:border-amber-400 focus:outline-none rounded-lg px-4 py-2 shadow-sm"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="hover:!bg-amber-400 hover:text-white px-4 py-2 rounded-lg shadow text-sm transition-colors duration-200"
              >
                태그 추가
              </button>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center bg-amber-400 text-black text-sm font-medium px-3 py-1 rounded-lg"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 !bg-amber-400 text-black hover:!bg-amber-500"
                  >
                  ×
                  </button>
                </span>
              ))}
            </div>

          {/* 등록 버튼 */}
          <DialogFooter className="flex justify-center sm:justify-center pt-4">
            <div className="flex justify-center">
              <button
                type="submit"
                className="border border-gray-300 hover:!bg-amber-400 hover:text-white text-black font-medium px-6 py-2 rounded-lg shadow"
                onClick={handleSubmit}
              >
                등록
              </button>
            </div>
          </DialogFooter>
        </form>
        
        {/* 닫기 버튼은 DialogContent 내부에 이미 있음 */}
      </DialogContent>
    </Dialog>
  );
}
