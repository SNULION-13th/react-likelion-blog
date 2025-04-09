import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useAuth } from "@/shared/context/userContext";
import { Button } from "@/shared/components";
import { useState, useEffect } from "react";

//HINT: State
const posts = [];
const searchTags = [];
const storedTags = [];

export default function Home() {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // ContextAPI에서 유저 정보 가져오기

  const [posts, setPosts] = useState([]); // 게시글 정보들 저장하는 state
  const [tagKeyword, setTagKeyword] = useState(""); // 검색어 상태
  const [searchTags, setSearchTags] = useState([]); // 검색 태그를 저장하는 state

  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false); // PostDialog 열림 상태

  const fetchPosts = async () => {
    const posts = await getPosts();
    // console.log("post fetch response", posts);
    setPosts(posts); // posts state 업데이트
  };

  const fetchTags = async () => {
    const tags = await getTags();
    // console.log("tag fetch response", tags);
    setSearchTags(tags); // searchTags state 업데이트
  };

  const handleSearchTagInputChange = (e) => {
    setTagKeyword(e.target.value); // 검색어 상태 저장
  };

  const handleCreatePost = async (post, author) => {
    // console.log("post", post);
    // console.log("author", author);
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    // console.log("new post", newPost);

    // 기존 post 배열에 새로운 post 추가
    setPosts((prevPosts) => [...prevPosts, newPost]);

    setIsPostDialogOpen(false); // PostDialog 닫기
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetchPosts();
        fetchTags();
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    };

    fetchData();
  }, []);

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
            value={tagKeyword}
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {searchTags
            .filter(
              (tag) => tagKeyword === "" || tag?.content?.startsWith(tagKeyword)
            )
            .map((tag) => {
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
        <Button onClick={() => setIsPostDialogOpen(true)} className="mt-6">
          작성
        </Button>
      )}

      {/* TODO: PostDialog 컴포넌트 구현 */}
      {isPostDialogOpen && (
        <PostDialog
          onClose={() => setIsPostDialogOpen(false)}
          onCreate={(post) => handleCreatePost(post, user.username)}
        />
      )}
    </div>
  );
}
