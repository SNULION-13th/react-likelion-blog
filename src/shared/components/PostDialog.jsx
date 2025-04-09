//TODO: 게시글 작성 모달 컴포넌트 구현
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";

import { Button } from "@/shared/components";
import { Input } from "@/shared/components";
import { Textarea } from "@/shared/components";
import { useState } from "react";
import { useUser } from "@/shared/context";

export const PostDialog = ({ onPostSubmit }) => {
  const [tagInput, setTagInput] = useState("");
  const [tagInputs, setTagInputs] = useState([]);

  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const { user, setUser } = useUser();

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tagInputs.includes(trimmed)) {
      setTagInputs((prevTagInputs) => [...prevTagInputs, tagInput]);
    }
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTagInputs((prevTagInputs) =>
      prevTagInputs.filter((tagInput) => tagInput !== tagToRemove)
    );
  };

  const handleSubmit = () => {
    if (!postTitle || !postContent) return alert("내용을 입력해주세요!");

    // const postTags = tagInputs.map((tag, index) => ({
    //   id: index + 10,
    //   content: tag,
    // }));

    const newPost = {
      title: postTitle,
      content: postContent,
      tags: tagInputs,
    };

    onPostSubmit(newPost, user.username);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>작성</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>게시글 작성</DialogTitle>
            <DialogDescription>
              게시글을 자유롭게 작성해보세요!
            </DialogDescription>
          </DialogHeader>

          {/* 제목 */}
          <div className="space-y-1">
            <label className="text-sm font-medium">제목</label>
            <Input
              placeholder="제목을 입력해주세요"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </div>

          {/* 내용 */}
          <div className="space-y-1">
            <label className="text-sm font-medium">내용</label>
            <Textarea
              placeholder="내용을 입력해주세요"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </div>

          {/* 태그 */}
          <div className="space-y-1">
            <label className="text-sm font-medium">태그</label>
            <div className="flex items-center gap-2">
              <Input
                placeholder="태그를 입력해주세요"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
              <Button variant="outline" onClick={handleAddTag}>
                태그 추가
              </Button>
            </div>

            {/* 추가된 태그 목록 */}
            <div className="flex flex-wrap gap-2">
              {tagInputs.map((tag, index) => (
                <div
                  key={index}
                  className="bg-amber-200 text-sm px-3 py-1 rounded-md flex items-center gap-2"
                >
                  <span className="font-bold">#{tag}</span>
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="!bg-amber-200 text-sm text-gray-600 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <DialogFooter className="flex sm:justify-center w-full mt-4">
            <DialogClose asChild>
              <Button type="submit" onClick={handleSubmit}>
                등록
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
