//TODO: 게시글 작성 모달 컴포넌트 구현
import {useState, useContext, useEffect} from "react";
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
} from "@/components/ui/dialog.jsx";
import {Input, Button, Textarea, Label, TagBadge} from "@/shared/components";
import { UserContext } from "@/shared/context";

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
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setTags(initialData.tags);
    }
  }
  , [initialData]);

  const handleTagInputChange = (e) => {
    const { value } = e.target;
    setTagInput(value);
  }

  const handleTagInputKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput)) {
        setTags((prevTags) => [...prevTags, tagInput]);
        setTagInput("");
      }
    }
  };

  const handleTagDelete = (tag) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
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
    }

    const success = await onSubmitSuccess(postData);
    if (success) {
      setTitle("");
      setContent("");
      setTags([]);
      setTagInput("");
      setOpen(false);
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        {triggerButton}
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[600px]"
        aria-describedby="post-dialog-description"
      >
        <DialogHeader>
          <DialogTitle>{initialData ? "게시글 수정" : "게시글 작성"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
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
              rows={8} // 여러 줄 입력 가능하도록
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tags">태그</Label>
            <div className="flex flex-wrap items-center gap-1 p-2 border rounded-md min-h-9">
              {tags.map((tag, index) => (
                <TagBadge
                  key={index}
                  tag={{ id: index, content: tag }} // 임시 ID 사용
                  rightSlot={
                    <button
                      type="button"
                      onClick={() => handleTagDelete(tag)}
                      className="ml-1 text-muted-foreground hover:text-foreground"
                      aria-label={`Remove ${tag} tag`}
                    >
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
                placeholder={tags.length === 0 ? "태그 입력..." : ""}
                list="tag-suggestions" // 자동 완성을 위한 datalist 연결
              />
              {/* 태그 자동 완성 제안 (datalist) */}
              <datalist id="tag-suggestions">
                {availableTags
                  .filter(
                    (at) =>
                      !tags.includes(at) && // 이미 추가된 태그 제외
                      at.toLowerCase().includes(tagInput.toLowerCase()) // 입력값 포함
                  )
                  .map((tag) => (
                    <option key={tag} value={tag} />
                  ))}
              </datalist>
            </div>
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              취소
            </Button>
          </DialogClose>
          <Button type="submit" onClick={handleSubmit}>
            {initialData ? "수정 완료" : "작성 완료"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};