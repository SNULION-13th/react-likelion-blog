//TODO: 게시글 작성 모달 컴포넌트 구현
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input, Button } from "@/shared/components";
import { Label } from "@radix-ui/react-label";
import { Badge, XIcon } from "lucide-react";
import { useState } from "react";

const PostDialog = ({ onClose = () => {}, onSubmit = () => {} }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleSubmit = () => {
    const post = { title, content, tags };
    onSubmit(post);
    onClose();
  };

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
          <DialogDescription>게시글을 자유롭게 작성해보세요!</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <label className="text-sm">제목</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />

          <label className="text-sm">내용</label>
          <textarea
            className="w-full border border-orange-400 rounded-md p-2 h-28"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <label className="text-sm">태그</label>
          <div className="flex gap-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="태그를 입력해주세요"
            />
            <Button onClick={handleAddTag}>태그 추가</Button>
          </div>

          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-orange-400 text-white px-2 py-1 rounded-full text-sm"
              >
                #{tag}
                <Button
                  type="button"
                  className="ml-2 text-black !bg-amber-400 hover:!text-black"
                  onClick={() => {
                    const newTags = tags.filter((_, index) => index !== i);
                    setTags(newTags);
                  }}
                >
                  ×
                </Button>
              </span>
            ))}
          </div>
        </div>

        <DialogFooter className="pt-4">
          <Button onClick={handleSubmit} className="w-full">
            등록
          </Button>
        </DialogFooter>

        <DialogClose className="absolute top-4 right-4 text-black hover:text-gray-500 p-1 bg-transparent border-none shadow-none rounded-full focus:outline-none">
          <XIcon size={20} className="pointer-events-none" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PostDialog;
