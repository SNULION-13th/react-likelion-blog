//TODO: 게시글 작성 모달 컴포넌트 구현
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const PostDialog = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    const trimmed = tag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
    }
    setTag("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleSubmit = () => {
    const post = { title, content, tags };
    console.log("작성된 게시글:", post);
    if (onSubmit) onSubmit(post);
    setTitle("");
    setContent("");
    setTag("");
    setTags([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
          <div className="text-lg text-gray-500 mt-1">
            게시글을 자유롭게 작성해보세요!
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">제목</label>
            <Input
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">내용</label>
            <Textarea
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">태그</label>
            <div className="flex gap-2 items-center">
              <Input
                placeholder="태그를 입력해주세요"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <Button
                type="button"
                onClick={handleAddTag}
                className="text-gray-800"
              >
                태그 추가
              </Button>
            </div>

            <div className="flex gap-2 flex-wrap mt-2">
              {tags.map((t) => (
                <div
                  key={t}
                  className="flex items-center bg-amber-200 px-4 py-1 rounded-xl text-sm font-semibold"
                >
                  <span className="mr-2">#{t}</span>
                  <button
                    onClick={() => handleRemoveTag(t)}
                    className="!bg-amber-300 text-xs px-2 py-1 rounded-full text-black"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter className="flex justify-center mt-6">
          <Button onClick={handleSubmit} className="text-gray-800">
            등록
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
