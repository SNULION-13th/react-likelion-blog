import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useUser } from "@/shared/context";
import { Button } from "@/shared/components";
import PostDialog from "@/shared/components/PostDialog";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  //HINT: State
  const [posts, setPosts] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const allTags = posts
      .flatMap((post) => post.tags)
      .filter(
        (tag, index, self) => index === self.findIndex((t) => t.id === tag.id)
      );
    setStoredTags(allTags);
    setSearchTags(allTags);
  }, [posts]);

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    const newTags = storedTags.filter((tag) => tag.content.includes(value));
    console.log("search tag input change", value);
    setSearchTags(newTags);
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);

    setPosts((prev) => [...prev, newPost]);
    setIsPostDialogOpen(false);
  };

  return (
    <div className="pb-20 pt-14">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black">my blog</h1>
        </div>
        <div className="w-[90vw] max-w-md flex justify-center">
          <Input
            type="text"
            placeholder="태그를 검색하세요"
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {searchTags.map((tag) => {
            return <TagBadge key={tag.id} tag={tag} />;
          })}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full flex justify-center items-center"
          >
            <SmallPost
              post={post}
              onClick={() => {
                console.log(post.id);
                navigate(`/post/${post.id}`);
              }}
            />
          </div>
        ))}
      </div>

      <div>
        {user && (
          <Button onClick={() => setIsPostDialogOpen(true)}>작성</Button>
        )}
        {isPostDialogOpen && (
          <PostDialog
            onClose={() => setIsPostDialogOpen(false)}
            onSubmit={(post) => handleCreatePost(post, user.username)}
          />
        )}
      </div>
    </div>
  );
}
