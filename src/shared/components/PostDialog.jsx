import { useState, useContext, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import { Input, Button, Textarea, Label, TagBadge } from "@/shared/components";
import { UserContext } from "@/shared/context";
import { XIcon } from "lucide-react";

export const PostDialog = ({
  triggerButton,
  onSubmitSuccess,
  initialData = null,
  availableTags = [],
}) => {
  const { user, isLoggedIn } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setTags(initialData.tags || []);
      setTagInput("");
    } else if (!open) {
      if (!initialData) resetForm();
    }
  }, [initialData, open]);

  const resetForm = () => {
    if (!initialData) {
      setTitle("");
      setContent("");
      setTags([]);
      setTagInput("");
    } else {
      setTitle(initialData.title);
      setContent(initialData.content);
      setTags(initialData.tags || []);
      setTagInput("");
    }
  };

  const handleTagInputChange = (e) => {
    const { value } = e.target;
    setTagInput(value);
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.some((t) => t.toLowerCase() === newTag.toLowerCase())) {
        setTags((prevTags) => [...prevTags, newTag]);
      }
      setTagInput("");
    }
  };

  const handleTagDelete = (tagToDelete) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tagToDelete));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const postData = {
      title,
      content,
      tags,
    };

    const success = await onSubmitSuccess(postData);
    if (success) {
      setOpen(false);
      if (!initialData) {
        resetForm();
      }
    }
  };

  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
      resetForm();
    }
    setOpen(isOpen);
  };

  if (!isLoggedIn) {
    return null;
  }

  const tagSuggestions = availableTags
    .filter(
      (at) =>
        !tags.some((t) => t.toLowerCase() === at.toLowerCase()) &&
        at.toLowerCase().includes(tagInput.toLowerCase()) &&
        tagInput.trim() !== ""
    )
    .map((tag) => <option key={tag} value={tag} />);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {triggerButton}
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[600px]"
        aria-describedby="post-dialog-description"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle>
            {initialData ? "게시글 수정" : "게시글 작성"}
          </DialogTitle>
        </DialogHeader>
        <form
          id="post-form"
          onSubmit={handleSubmit}
          className="grid gap-4 py-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="title">제목</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content">내용</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              rows={8}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tags">태그</Label>
            <div className="flex flex-wrap items-center gap-1 p-2 border rounded-md min-h-9">
              {tags.map((tag, index) => (
                <TagBadge
                  key={index}
                  tag={{ id: index, content: tag }}
                  rightSlot={
                    <button
                      type="button"
                      onClick={() => handleTagDelete(tag)}
                      className="ml-1 p-0.5 appearance-none border-none !bg-transparent text-white hover:!bg-white/20 focus:!bg-white/20 focus:outline-none focus:ring-0 flex items-center justify-center rounded-full"
                      aria-label={`Remove ${tag} tag`}
                    >
                      <XIcon size={14} strokeWidth={3} />
                    </button>
                  }
                />
              ))}
              <Input
                id="tags"
                className="flex-1 border-none shadow-none focus-visible:ring-0 h-auto p-0 m-0"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleTagInputKeyDown}
                placeholder={tags.length === 0 ? "태그 입력 후 Enter..." : ""}
                list="tag-suggestions"
              />
              <datalist id="tag-suggestions">{tagSuggestions}</datalist>
            </div>
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              취소
            </Button>
          </DialogClose>
          <Button type="submit" form="post-form">
            {initialData ? "수정 완료" : "작성 완료"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
