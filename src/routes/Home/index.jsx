// routes/Home/index.jsx

import React, { useState, useEffect, useContext } from "react";
import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog, Button } from "../../shared/components";
import { getPosts, getTags, getPostById, getTagsByPostId } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { UserContext } from "../../shared/context/userContext.jsx";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // Get global user info

  // States for posts, tags, and modal visibility
  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]); // 필요에 따라 사용
  const [isDialogOpen, setIsDialogOpen] = useState(false); // 모달 열림 여부

  // New state to track the tag search input from the user
  const [tagSearchInput, setTagSearchInput] = useState("");

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
      // Initially, you may load all tags (if desired)
      const tags = await getTags();
      console.log("tag fetch response", tags);
      setSearchTags(tags);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  // 사용자 태그 검색 입력 변경 핸들러
  const handleSearchTagInputChange = async (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
    setTagSearchInput(value);

    // If the input is a valid number, treat it as a post ID and fetch tags via getTagsByPostId
    if (!isNaN(value.trim()) && value.trim() !== "") {
      try {
        const tagsByPost = await getTagsByPostId(Number(value.trim()));
        console.log("tags by post", tagsByPost);
        setSearchTags(tagsByPost);
      } catch (error) {
        console.error("Error fetching tags by post id:", error);
      }
    } else {
      // Otherwise, you might want to revert to the default fetched tags or filter your current list by keyword.
      // For example, filtering the initial list:
      const filtered = (await getTags()).filter((tag) =>
        (tag.name || "").toLowerCase().includes(value.toLowerCase())
      );
      setSearchTags(filtered);
    }
  };

  // 게시글 생성 API 호출 후 state 업데이트
  const handleCreatePost = async (post, author) => {
    try {
      const createResponse = await createPost({
        ...post,
        author,
      });
      const newPost = await getPostById(createResponse.postId);
      console.log("new post", newPost);
      // 새로운 게시글을 기존 posts에 추가
      setPosts((prevPosts) => [...prevPosts, newPost]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // PostDialog 컴포넌트의 onSubmit 호출 시 처리
  const handleDialogSubmit = (postData) => {
    if (user) {
      // 예: user.username을 author로 사용. (user 구조에 따라 적절히 수정)
      handleCreatePost(postData, user.username);
    }
    setIsDialogOpen(false); // 모달 닫기
  };

  // If you also want local filtering when not using a postId,
  // you can calculate filteredTags based on searchTags and tagSearchInput.
  // For example, if you want to filter by tag name:
  const filteredTags = searchTags.filter((tag) =>
    (tag.name || "").toLowerCase().includes(tagSearchInput.toLowerCase())
  );

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
            value={tagSearchInput}
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {filteredTags.map((tag) => (
            <TagBadge key={tag.id} tag={tag} />
          ))}
        </div>

        {/* 로그인한 유저 정보가 있을 때만 게시글 작성 버튼 렌더링 */}
        {user && (
          <div className="mt-5">
            <Button onClick={() => setIsDialogOpen(true)}>
              새 게시글 작성
            </Button>
          </div>
        )}
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

      {/* PostDialog 모달 컴포넌트 */}
      <PostDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleDialogSubmit}
      />
    </div>
  );
}
