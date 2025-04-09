//TODO: 게시글 작성 모달 컴포넌트 구현

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input, Label, Textarea } from "@/shared/components";
import { useState } from "react";
import { createPost } from "@/routes/Home/api";
import { useContext } from "react";
import { UserContext } from "@/shared/context/userContext";
import { useNavigate } from "react-router-dom";

export const PostDialog = ({ handleCreatePost }) => {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [postContent, setPostContent] = useState({
    title: "",
    content: "",
  });

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = () => {
    console.log("Post content:", postContent);

    if (!postContent.title || !postContent.content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const postData = {
      ...postContent,
      tags,
    };

    try {
      handleCreatePost(postData, user.username);
      setIsOpen(false);
      setPostContent({ title: "", content: "" });
      setTags([]);
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("게시글 작성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className="btn !bg-amber-500 text-white"
        >
          작성
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[550px] max-h-[600px]">
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
          <DialogDescription>게시글을 자유롭게 작성해보세요!</DialogDescription>
        </DialogHeader>
        {/* Add your form or content here */}
        <Label className="font-bold my-0">제목</Label>
        <Input
          type="text"
          placeholder="제목을 입력하세요"
          className="my-0"
          value={postContent.title}
          onChange={(e) =>
            setPostContent({ ...postContent, title: e.target.value })
          }
        />
        <Label className="font-bold my-0">내용</Label>
        <Textarea
          placeholder="내용을 입력하세요"
          className="my-0 h-20 align-top"
          value={postContent.content}
          onChange={(e) =>
            setPostContent({ ...postContent, content: e.target.value })
          }
        />
        <Label className="font-bold my-0">태그</Label>
        <div className="flex flex-wrap gap-2 my-0">
          <Input
            type="text"
            placeholder="태그를 입력하세요"
            className="flex-1"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
          <button
            onClick={() => handleAddTag()}
            className="btn !bg-gray-100 text-black !py-1"
          >
            태그 추가
          </button>
        </div>
        <div className="flex flex-wrap gap-2 my-0">
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-1 bg-yellow-300 p-1 !rounded-md ml-1 pl-2"
            >
              <span>{tag}</span>
              <button
                onClick={() => handleRemoveTag(tag)}
                className="text-black !bg-yellow-300 hover:!bg-yellow-500"
              >
                X
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 my-0">
          <button
            className="btn !bg-gray-100 text-black mt-0"
            onClick={handleSubmit}
          >
            등록
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
