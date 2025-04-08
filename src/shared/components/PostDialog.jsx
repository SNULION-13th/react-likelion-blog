import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Button,
  Input,
  Textarea,
  TagBadge,
  PostTagBadge,
} from "@/shared/components";
import { useLogIn } from "@/contexts";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

export const PostDialog = ({ tags, setTags, posts, setPosts }) => {
  const { isLogIn, username } = useLogIn();
  const [tagInput, setTagInput] = useState("");
  const [postTags, setPostTags] = useState([]);

  const submitPostTagInput = (e) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();

      const keywords = tagInput
        .trim()
        .split(",")
        .map((w) => w.trim().replace(/^#/, ""))
        .filter(Boolean);

      setPostTags((prev) => [
        ...new Set([...prev, ...keywords.filter((w) => !prev.includes(w))]),
      ]);

      setTagInput("");
    }
  };

  const createPost = () => {
    const userTags = postTags.filter(
      (tag) => !tags.some((t) => t.content === tag)
    );
    const newTags = userTags.map((tag, index) => ({
      id: tags.length + index + 1,
      content: tag,
    }));
    const oldTags = postTags
      .filter((tag) => tags.some((t) => t.content === tag))
      .map((tag) => ({
        id: tags.find((t) => t.content === tag).id,
        content: tag,
      }));

    const newPost = {
      id: posts.length + 1,
      title: document.querySelector("input[name='title']").value,
      content: document.querySelector("textarea[name='content']").value,
      author: username,
      tags: [...oldTags, ...newTags],
      like_users: 0,
      created_at: new Date().toISOString(),
      comments: [],
    };

    setPosts((prev) => [...prev, newPost]);

    setTags((prev) => [...prev, ...newTags]);

    setPostTags([]);
  };

  return isLogIn ? (
    <Dialog>
      <DialogTrigger asChild>
        <div className="fixed bottom-10 right-10">
          <Button className="!bg-amber-500 text-white ">✏️</Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>NEW POST</DialogTitle>
          <DialogDescription> 새로운 POST를 작성합니다.</DialogDescription>
          <hr />
        </DialogHeader>

        <div className="flex flex-col gap-2">
          <p className="text-sm ml-2">작성자: {username}</p>
          <Input
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
          ></Input>
          <Textarea
            name="content"
            placeholder="내용을 입력하세요"
            className=""
          ></Textarea>
          <Input
            name="tag"
            type="text"
            placeholder="태그를 입력 후 enter를 눌러주세요"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={submitPostTagInput}
          ></Input>
          <p className="text-xs text-gray-500 ml-2">
            태그는 쉼표(,)로 구분될 수 있습니다.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-start flex-wrap">
              {postTags.map((tag) => {
                return (
                  <PostTagBadge
                    key={tag}
                    text={tag}
                    onClick={() =>
                      setPostTags((prev) => prev.filter((t) => t !== tag))
                    }
                    className="bg-amber-500 hover:bg-gray-300"
                  />
                );
              })}
            </div>
            <hr />
            <p className="text-xs text-gray-600">추천 태그</p>
            <div className="flex justify-start flex-wrap">
              {tags.map((tag) => {
                return (
                  <TagBadge
                    key={tag.id}
                    tag={tag}
                    onClick={() =>
                      setPostTags((prev) =>
                        prev.find((t) => t === tag.content)
                          ? prev
                          : [...prev, tag.content]
                      )
                    }
                    className="bg-gray-300 hover:bg-amber-500"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-center w-full">
            <DialogClose
              className="!bg-amber-500 text-white w-20"
              onClick={createPost}
            >
              등록
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <div></div>
  );
};
