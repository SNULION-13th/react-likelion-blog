//TODO: 게시글 작성 모달 컴포넌트 구현

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input, Button, Textarea } from "@/shared/components";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const PostDialog = ({ onCreatePost, onTagUpdate }) => {
  // 받아온 props를 이용.
  // 필요한 상태들 선언. 변수처럼 정보를 담는 역할
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]); // 태그들이 들어갈 배열
  const [open, setOpen] = useState(false); // 모달 열림 여부 상태

  const handleSubmit = () => {
    const postData = {
      title,
      content,
      tags,
    };

    console.log("작성된 게시글 데이터:", postData);
    // 여기에 실제 API 요청 코드 넣으면 됨.
    // 예: axios.post("/api/post", postData)

    onCreatePost(postData, "지호");

    //onCreatePost(postData, "무");

    //이후 모든 상태 초기화
    setTitle("");
    setContent("");
    setTag(""); // 다 된 후 초기화
    setTags([]); // 태그 초기화
    setOpen(false); // 모달 닫기

    //onTagUpdate(); // 태그 업데이트 함수 호출
  };

  const handleTag = () => {
    if (tag.trim() === "") return; // 빈 태그는 추가 X
    setTags((prevTags) => [...prevTags, tag]); // 기존 태그 배열에 새 태그 추가, prevTages는 이전 상태를 의미
    setTag(""); // 입력 필드 초기화
  };

  const handleDeleteTag = (indexToDelete) => {
    setTags(tags.filter((_, index) => index !== indexToDelete));
  };
  // tag를 tags에서 없애는 함수.

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        style={{ backgroundColor: "var(--color-amber-500)" }}
        className="!text-white px-4 py-2 rounded"
      >
        작성
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
          <DialogDescription>게시글을 자유롭게 작성해보세요!</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-1">
            <Label htmlFor="title" className="text-right">
              제목
            </Label>
            <Input
              id="title"
              placeholder="제목을 입력해주세요"
              className="col-span-4"
              value={title} // 이렇게 title이라는 상태와 연결해주고, 입력 값이 바뀔때마다 title이 변함.
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-1">
            <Label htmlFor="content" className="text-right">
              내용
            </Label>
            <Textarea
              id="content"
              placeholder="내용을 입력해주세요"
              className="col-span-4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-1">
            <Label htmlFor="tag" className="text-right col-span-2">
              태그
            </Label>
            <Input
              id="tag"
              placeholder="태그를 입력해주세요"
              className="col-span-3"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <Button
              type="button"
              variant="outline"
              className="col-span-1 !text-sm"
              onClick={handleTag}
            >
              태그 추가
            </Button>
          </div>
          {tags.length > 0 && (
            <div className="flex-wrap gap-1">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-amber-500 text-black text-sm px-2 py-1 rounded-full mr-1"
                >
                  #{tag}
                  <button
                    onClick={() => handleDeleteTag(index)}
                    className="ml-1 text-xs hover:text-amber-500 p-0 rounded-full"
                    style={{
                      lineHeight: "0.25",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                    }}
                  >
                    x
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        <DialogFooter className="flex !justify-center">
          <Button type="submit" onClick={handleSubmit}>
            등록
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
