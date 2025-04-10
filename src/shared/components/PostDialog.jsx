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
import { Button, Input } from "@/shared/components";
import { useState } from "react";

export const PostDialog = ({ onSubmit, author }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
    }
    setTagInput("");
  };

  const handleSubmit = () => {
    if (!title.trim() || !body.trim()) {
      alert("제목과 본문을 모두 입력해주세요.");
      return;
    }

    // 새 게시글 데이터 구성
    const newPostData = {
      title,
      body, // PostDialog에서는 본문을 'body' 상태로 관리 (Home에서 이를 'content'로 사용 가능)
      tags, // 태그는 문자열 배열
    };

    // 입력 후 상태 초기화
    setTitle("");
    setBody("");
    setTagInput("");
    setTags([]);

    // onSubmit을 호출하여 새 게시글 데이터를 Home으로 전달
    onSubmit(newPostData, author);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>작성</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
          <DialogDescription>게시글을 자유롭게 작성해보세요!</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <div>
            <p className="text-sm font-medium mb-1">제목</p>
            <Input
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <p className="text-sm font-medium mb-1">내용</p>
            <textarea
              className="w-full border rounded-md p-2 resize-none h-32"
              placeholder="본문을 입력해주세요"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div>
            <p className="text-sm font-medium mb-1">태그</p>
            <div className="flex gap-2">
              <Input
                placeholder="태그를 입력해주세요"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
              <Button type="button" onClick={handleAddTag}>
                태그 추가
              </Button>
            </div>
            <div className="flex gap-2 flex-wrap mt-2">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-orange-500 text-white rounded text-sm px-2 py-1"
                >
                  <span>#{tag}</span>
                  <button
                    type="button"
                    onClick={() => setTags(tags.filter((_, i) => i !== idx))}
                    className="ml-2 text-white hover:text-black text-xs px-1"
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>등록</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
