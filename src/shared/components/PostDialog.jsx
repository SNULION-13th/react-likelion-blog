//TODO: 게시글 작성 모달 컴포넌트 구현
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

import { Input, Button, TagBadge } from "@/shared/components";
import { useState } from "react";
import { useUserContext } from "@/shared/context";

//sever로 보내는 것을 이 안에다가 넣으면 됨 submit
//submit에 연결할 함수를 만ㄷ르어서
export const PostDialog = ({ onSubmitPost }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const { user } = useUserContext();

  const handleAddTag = () => {
    if (tagInput.trim() === "") return;
    const newTag = { id: Date.now(), content: tagInput };
    setTags([...tags, newTag]);
    setTagInput("");
    console.log(newTag);
  };

  const handleRemoveTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const handleSubmit = async () => {
    //console.log(tags);
    const post = {
      title,
      content,
      tags: tags.map((tag) => tag.content),
    };
    console.log(post.tags);
    console.log(content);
    console.log("1");
    await onSubmitPost?.(post, user?.username);
    setOpen(false);
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setTagInput("");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (isOpen) resetForm();
      }}
    >
      <DialogTrigger asChild className="!bg-transparent">
        <Button
          onClick={() => {
            setTags([]);
            setOpen(true);
          }}
          className="!bg-amber-500 !hover:bg-amber-500 font-bold text-white"
        >
          작성
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
          <DialogDescription>게시글을 작성하세요</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-2">
          <div>
            <label className="text-sm font-semibold">제목</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용"
              className="mt-1 w-full p-2 border rounded-md resize-none
                focus:ring-2 focus:ring-amber-500 focus:outline-none
                transition duration-200"
              rows={4}
            />
          </div>

          <div className="flex items-center gap-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="태그"
            />
            <Button onClick={handleAddTag}>태그 추가</Button>
          </div>

          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <TagBadge
                key={tag.id}
                tag={tag}
                onClick={() => handleRemoveTag(tag.id)}
                rightSlot={<span className="ml-1">X</span>}
              />
            ))}
          </div>
        </div>

        <DialogFooter className="!justify-center">
          <Button type="button" onClick={() => setOpen(false)}>
            취소
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            등록
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
