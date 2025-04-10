import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "@/shared/context/userContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const fetchPosts = async () => {
    const postsData = await getPosts();
    console.log("post fetch response", postsData);
    setPosts(postsData);
  };

  const fetchTags = async () => {
    const tagsData = await getTags();
    setStoredTags(tagsData);
    setSearchTags(tagsData);
    console.log("tag fetch response", tagsData);
  };

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setTagInput(value);
    if (!value) {
      setSearchTags(storedTags);
    } else {
      setSearchTags(
        storedTags.filter((tag) =>
          tag.content.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, userId) => {
    try {
      console.log(post.content);
      const response = await createPost({
        title: post.title,
        author: userId,
        content: post.content,
        tags: post.tags,
      });

      const newPost = await getPostById(response.postId);
      setPosts((prev) => [...prev, newPost]);

      fetchTags();
    } catch (err) {
      console.error("게시글 생성 실패", err);
    }
  };

  return (
    <div className="pb-40 pt-14">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black">my blog</h1>
        </div>
        <div className="w-[90vw] max-w-md flex justify-center">
          <Input
            type="text"
            placeholder="태그를 검색하세요"
            onChange={handleSearchTagInputChange}
            value={tagInput}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {searchTags.map((tag) => (
            <TagBadge key={tag.id} tag={tag} />
          ))}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 pb-17 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full flex justify-center items-center"
            onClick={() => {
              console.log(post.id);
              navigate(`/post/${post.id}`);
            }}
          >
            <SmallPost post={post} />
          </div>
        ))}
      </div>

      {user && <PostDialog onSubmit={handleCreatePost} author={user.name} />}
    </div>
  );
}
