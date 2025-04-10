//TODO: 게시글 작성 모달 컴포넌트 구현
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, Input, Label, TagBadge, Textarea } from "@/shared/components";
import { useState } from "react";
import { X } from "lucide-react";

export const PostDialog = ({ triggerName, onSubmitPost, userName }) => {
  const [inputTags, setInputTags] = useState([]);
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // tag 제외 나머지 (title, content) input change 관리
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  // tag 입력창 텍스트 관리
  const handleTagInputChange = (e) => {
    setText(e.target.value);
  };
  // tag 목록 관리
  const handleTagSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newId =
        inputTags.length > 0
          ? Math.max(...inputTags.map((tag) => tag.id)) + 1
          : 0;
      const newTag = { id: newId, content: text };
      setInputTags((prevTags) => [...prevTags, newTag]);
      setText(""); // 입력창 초기화
    }
  };

  const handleTagDelete = (id) => {
    setInputTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  };

  // dialog에서 생성한 post 전체 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      ...post,
      tags: inputTags.map((tag) => tag.content),
    };
    console.log(postData);
    onSubmitPost(postData, userName);
    setInputTags([]);
    setPost({
      title: "",
      content: "",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerName}</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader className="pb-3.5">
            <DialogTitle>게시글 작성</DialogTitle>
            <DialogDescription>
              게시글을 자유롭게 작성해 보세요!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Label className="font-semibold">제목</Label>
            <Input
              name="title"
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={handleInputChange}
            />
            <Label className="font-semibold">내용</Label>
            <Textarea
              name="content"
              type="text"
              placeholder="내용을 입력해주세요"
              onChange={handleInputChange}
            />
            <Label className="font-semibold">태그</Label>
            <div className="flex flex-row gap-2 items-center mb-4">
              <Input
                name="tags"
                type="text"
                placeholder="태그를 입력해주세요"
                value={text ?? ""}
                onChange={handleTagInputChange}
              />
              <Button onClick={handleTagSubmit}>태그 추가</Button>
            </div>
            <div>
              {inputTags.map((tag) => (
                <TagBadge
                  key={tag.id}
                  tag={tag}
                  rightSlot={
                    <span
                      className="ml-2 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTagDelete(tag.id);
                      }}
                    >
                      <X size={14} />
                    </span>
                  }
                  className="px-3 py-1.5 text-sm"
                ></TagBadge>
              ))}
            </div>
          </div>
          <DialogFooter className="flex !justify-center">
            <Button type="submit">등록</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
