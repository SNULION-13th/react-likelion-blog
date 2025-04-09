import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";

import { useUser } from "@/shared/context";
import { useState, useEffect } from "react";
import { Button } from "@/shared/components";

//HINT: State
// const [posts, setPosts] = useState([]);
// const searchTags = [];
// const storedTags = [];

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]);

  const navigate = useNavigate();

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
    console.log("post fetch response", posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    setStoredTags(tags);
    setSearchTags(tags);
    console.log("tag fetch response", tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;

    if (!value) {
      setSearchTags(storedTags);
    } else {
      setSearchTags(() =>
        storedTags.filter((tag) => tag.content.includes(value))
      );
    }

    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);
    setPosts((prevPosts) => [...prevPosts, newPost]);
    //포스트가 등록됨에 따라 실시간으로 태그정보도 등록될 수 있도록 하는 코드
    await fetchTags();
  };

  // TODO: 페이지 진입 시 최초 한 번만 태그와 게시글 정보들 불러오기

  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  const { user, setUser } = useUser();

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
      <div className="mt-15">
        {
          /* TODO: 로그인한 유저 정보가 있을 때에만 게시글 작성 버튼이 나타난다. */
          user ? <PostDialog onPostSubmit={handleCreatePost} /> : null
        }
        {/* TODO: PostDialog 컴포넌트 구현 */}
      </div>
    </div>
  );
}
