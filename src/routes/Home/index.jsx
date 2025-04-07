import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useUser } from "../../shared/context/userContext";

// HINT: State
// const posts = [];
// const searchTags = [];
// const storedTags = [];

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchPosts = async () => {
    try {
      const posts = await getPosts();
      setPosts(posts || []);
      console.log("post fetch response", posts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      setPosts([]);
    }
  };

  const fetchTags = async () => {
    try {
      const tags = await getTags();
      setStoredTags(tags || []);
      setSearchTags(tags || []);
      console.log("tag fetch response", tags);
    } catch (error) {
      console.error("Failed to fetch tags:", error);
      setStoredTags([]);
      setSearchTags([]);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      await fetchTags();
      await fetchPosts();
    };
    loadInitialData();
  }, []);

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    if (value === "") {
      setSearchTags(storedTags);
    } else {
      const filteredTags = storedTags.filter((tag) =>
        tag.content.includes(value)
      );
      setSearchTags(filteredTags);
    }
    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post) => {
    const newPost = {
      id: Date.now(),
      title: post.title,
      content: post.content,
      tags: post.tags.map((tag, index) => ({ id: index, name: tag })),
      author: { username: user.username },
      like_users: [],
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  // TODO: 페이지 진입 시 최초 한 번만 태그와 게시글 정보들 불러오기

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
            value={searchValue}
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap gap-2 px-2">
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
      {/* TODO: 로그인한 유저 정보가 있을 때에만 게시글 작성 버튼이 나타난다. */}
      {user && (
        <div className="fixed bottom-5 left-1/2 z-10">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="!bg-yellow-500 text-white font-lg py3 px-6 rounded-md"
          >
            작성
          </button>
        </div>
      )}
      ;{/* TODO: PostDialog 컴포넌트 구현 */}
      {user && (
        <PostDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onSubmit={handleCreatePost}
        ></PostDialog>
      )}
    </div>
  );
}
