//routes/Home/index.jsx

import React, { useState, useEffect } from "react";
import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "../../shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  // posts와 tags들을 상태(state)로 선언
  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]); // 필요에 따라 사용

  // 컴포넌트 마운트 시에 데이터 fetch
  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  // 게시글 데이터를 받아오고 state 업데이트
  const fetchPosts = async () => {
    try {
      const postsData = await getPosts();
      console.log("post fetch response", postsData);
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // 태그 데이터를 받아오고 state 업데이트
  const fetchTags = async () => {
    try {
      const tags = await getTags();
      console.log("tag fetch response", tags);
      setSearchTags(tags);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, author) => {
    try {
      const createResponse = await createPost({
        ...post,
        author,
      });
      const newPost = await getPostById(createResponse.postId);
      console.log("new post", newPost);
      // 새로운 게시글을 기존 posts에 추가하는 방법 예시:
      setPosts((prevPosts) => [...prevPosts, newPost]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
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
          {searchTags.map((tag) => (
            <TagBadge key={tag.id} tag={tag} />
          ))}
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
      {/* TODO: PostDialog 컴포넌트 구현 */}
    </div>
  );
}
