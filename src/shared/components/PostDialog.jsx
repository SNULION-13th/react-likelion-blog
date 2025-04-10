//TODO: 게시글 작성 모달 컴포넌트 구현
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import { Button,Input,Textarea,TagInputBox} from "@/shared/components";
import { useState } from "react";

export const PostDialog = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = ()=> {
    const post = {title, content, tags};
    onSubmit(post);
    setTitle("");
    setContent("");
    setTags([]);
  }
  return(
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    <Card className="items-start " >
      <CardHeader className="flex items-start mt-10 !pt-0">
        <CardTitle className="text-l font-bold">게시글 작성</CardTitle>
        <p className="text-s">게시글을 자유롭게 작성해보세요!</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 items-start">
          <p className="text-l font-bold">제목</p>
          <Input
            name="title"
            value={title}
            placeholder="제목을 입력해주세요."
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="text-l font-bold">내용</p>
          <Textarea
            name="context"
            value={content}
            placeholder="내용을 입력해주세요."
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <TagInputBox />
      </CardContent>
      <CardFooter className="flex justify-center gap-[4px]">
        <Button type="submit" onClick={handleSubmit}>등록</Button>
        <Button  onClick={onClose}>취소</Button>
      </CardFooter>

    </Card>
    </div>
  )
};


