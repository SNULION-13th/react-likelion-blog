//TODO: 게시글 작성 모달 컴포넌트 구현
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "./Textarea";
import { Input, Button } from "@/shared/components";
import { TagBadge } from "./TagBadge";
import { useState, useEffect } from "react";

export const PostDialog = ({ onSubmit, isOpen }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    const newTag = { id: tags.length + 1, content: tagInput.trim() };
    setTags([...tags, newTag]);
    setTagInput("");
  };

  const handleRemoveTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const handleSubmit = () => {
    const tagNames = tags.map((tag) => tag.content);

    onSubmit({
      title,
      content,
      tags: tagNames,
    });
  };

  useEffect(() => {
    return () => {
      setTags([]);
      setTitle("");
      setContent("");
      setTagInput("");
    };
  }, [isOpen]);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>게시글 작성</DialogTitle>
        <DialogDescription>게시글을 자유롭게 작성해보세요!</DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-2 text-center sm:text-left">
        <div className="text-sm leading-none font-semibold px-1">제목</div>
        <Input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
      </div>

      <div className="flex flex-col gap-2 text-center sm:text-left mt-2">
        <div className="text-sm leading-none font-semibold px-1">내용</div>
        <Textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 text-center sm:text-left mt-2">
        <div className="text-sm leading-none font-semibold px-1">태그</div>
        <div className="flex flex-row gap-1">
          <Input
            placeholder="태그를 입력하세요"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          ></Input>
          <Button onClick={handleAddTag}>태그 추가</Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <TagBadge
              key={tag.id}
              tag={tag}
              rightSlot={
                <button
                  className="!bg-transparent text-white text-[10px] !px-[2px] !py-[2px] leading-none hover:text-red-200 border-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveTag(tag.id);
                  }}
                >
                  ✕
                </button>
              }
            ></TagBadge>
          ))}
        </div>
      </div>

      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button onClick={handleSubmit}>등록</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};
