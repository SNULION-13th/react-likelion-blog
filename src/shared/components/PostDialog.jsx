//TODO: 게시글 작성 모달 컴포넌트 구현
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useUser } from "@/shared/context/userContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Button } from "@/shared/components";
import { useState } from "react";

export const PostDialog = ({ onSubmit }) => {
  const [tags, setTags] = useState([]); // 태그를 저장할 상태
  const [tag, setTag] = useState(""); // 태그 입력값을 저장할 상태
  const [title, setTitle] = useState(""); // 제목 입력값을 저장할 상태
  const [content, setContent] = useState(""); // 내용 입력값을 저장할 상태
  const { user } = useUser();

  const handleTag = (tag) => {
    if (!tag.trim() || tags.includes(tag)) return;
    setTags([...tags, tag]); // ✅ 새 배열로 갱신
    setTag("");
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
    console.log("태그 삭제", tags);
  };

  const handleSubmit = () => {
    const post = {
      title,
      content,
      tags,
    };
    onSubmit(post, user.username);
  };

  return (
    <Dialog>
      <DialogTrigger className="mt-7 !bg-amber-500 !text-white !font-bold">
        작성
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
          <DialogDescription>게시글을 자유롭게 작성해보세요!</DialogDescription>
        </DialogHeader>
        <form>
          <Label className="mb-2">제목</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="제목을 입력해주세세요"
            className="mb-2 w-full focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
          <Label className="mb-2">내용</Label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세세요"
            className="mb-2 w-full h-48 focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
          <Label className="mb-2">태그</Label>
          <div className="flex flex-row gap-2">
            <Input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              type="text"
              placeholder="태그를 입력해주세세요"
              className="mb-2 w-full focus-visible:ring-amber-500 focus-visible:border-amber-500"
            />
            <Button type="button" className="" onClick={() => handleTag(tag)}>
              태그 추가
            </Button>
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex text-sm font-bold bg-amber-200 text-black px-2 py-1 rounded-md items-center gap-2"
              >
                <span>#{tag}</span>
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="!bg-amber-300 text-black font-bold"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            {/* 등록 누르면 다이얼로그 닫히게 */}
            <Button
              onClick={() => {
                handleSubmit();
                console.log("게시글 작성 완료", { title, content, tags });
                setTags([]); // 태그 초기화
                setTitle(""); // 제목 초기화
                setContent(""); // 내용 초기화
              }}
            >
              등록
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
