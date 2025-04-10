// src/shared/components/PostDialog.jsx
import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

export const PostDialog = ({ isOpen, onClose, onSubmit }) => {
  // Local state for form inputs.
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // Now, we store tags as an array.
  const [tags, setTags] = useState([]);
  // Separate state to track the current tag input.
  const [tagInput, setTagInput] = useState("");

  if (!isOpen) return null;

  // Function to add a single tag to the tag list.
  const handleAddTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag) {
      setTags((prevTags) => [...prevTags, trimmedTag]);
      setTagInput("");
    }
  };

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { title, content, tags };
    if (onSubmit) onSubmit(postData);
    // Reset the form fields after submission.
    setTitle("");
    setContent("");
    setTags([]);
    setTagInput("");
    if (onClose) onClose();
  };

  return (
    // Modal overlay styling.
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4">새 게시글 작성</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 제목 필드 */}
          <div>
            <Label htmlFor="postTitle">제목</Label>
            <Input
              id="postTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="게시글 제목을 입력하세요"
              className="w-full"
            />
          </div>
          {/* 내용 필드 */}
          <div>
            <Label htmlFor="postContent">내용</Label>
            <textarea
              id="postContent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="게시글 내용을 입력하세요"
              className="w-full h-40 p-2 border border-gray-300 rounded focus:ring-amber-500 focus:ring-2 focus:border-transparent"
            />
          </div>
          {/* 태그 추가 섹션 */}
          <div>
            <Label htmlFor="tagInput">태그</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="tagInput"
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="태그 입력"
                className="w-full"
              />
              <Button type="button" onClick={handleAddTag}>
                추가
              </Button>
            </div>
            {/* 추가된 태그 미리보기 */}
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-200 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* 액션 버튼 */}
          <div className="flex justify-end space-x-2">
            <Button type="button" onClick={onClose}>
              취소
            </Button>
            <Button type="submit">작성</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
