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
import { Button, Input, Label } from "@/shared/components";
import { useState } from "react";
import { useContext } from "react";
import { loginContext } from "@/shared/context/loginContext";

export const PostDialog = ({ title, description, onClose, onSubmit }) => {
  // form to save data for post
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tag: [],
  });
  const [tags, setTags] = useState([]); // State to store the list of tags
  const { user } = useContext(loginContext); // Get the user from context

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // update only the changed field
    }));
  };
  const handleAddTag = (e) => {
    // Check if the tag is not empty and not already in the list
    if (formData.tag.trim() !== "" && !tags.includes(formData.tag)) {
      setTags((prev) => [...prev, formData.tag]); // Add the tag to the list
      setFormData((prev) => ({ ...prev, tag: "" })); // Clear the tag input
    }
  };
  const handleRemoveTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index)); // Remove the tag from the list
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (e.target.title.value !== "") {
      const submittedData = {
        ...formData,
        tags, // Include the list of tags
      };
      onSubmit(submittedData, user.username); // Call the onSubmit function with the form data
      onClose(); // Close the dialog
    } else {
      alert("제목을 입력해주세요"); // Show an alert if the title is empty
    }
  };

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="flex flex-col">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{description}</DialogDescription>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 dialog-content"
        >
          <span>제목</span>
          <Input
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
            value={formData.title}
            onChange={handleInputChange}
          />
          <span>내용</span>
          <Input
            type="text"
            name="content"
            placeholder="내용을 입력해주세요"
            value={formData.content}
            onChange={handleInputChange}
          />
          <span>태그</span>
          <div className="flex flex-row gap-2">
            <Input
              className="w-3/4"
              type="text"
              name="tag"
              placeholder="태그를 입력해주세요"
              value={formData.tag}
              onChange={handleInputChange}
            />
            <Button type="button" className="w-1/4" onClick={handleAddTag}>
              태그 추가
            </Button>
          </div>
          {/* Display the list of tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Label
                key={index}
                className="px-2 py-1 bg-amber-300 rounded text-sm"
              >
                {tag}
                <Button
                  type="button"
                  className="ml-2 text-black !bg-amber-400 hover:!text-black"
                  onClick={() => {
                    handleRemoveTag(index); // Remove the tag from the list
                  }}
                >
                  x
                </Button>
              </Label>
            ))}
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="w-25">
              등록
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
