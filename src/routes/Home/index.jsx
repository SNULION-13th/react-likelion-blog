import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useUserContext } from "@/shared/context";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    setPosts(posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
    setSearchTags(tags);
    setStoredTags(tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setTagInput(value);
    console.log("search tag input change", value);

    const filterdTag = value
      ? storedTags.filter((tag) => tag.content.toLowerCase().includes(value))
      : storedTags;

    setSearchTags(filterdTag);
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
      setPosts((prev) => [...prev, newPost]); // 새 글 맨 위에 추가
      fetchTags(); // 태그 목록도 갱신
    } catch (err) {
      console.error("게시글 생성 실패", err);
    }
  };

  // TODO: 페이지 진입 시 최초 한 번만 태그와 게시글 정보들 불러오기
  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

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
            value={tagInput}
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
      <div className="mt-20">
        {user && <PostDialog onSubmitPost={handleCreatePost} />}
      </div>

      {/* TODO: PostDialog 컴포넌트 구현 */}
    </div>
  );
}
