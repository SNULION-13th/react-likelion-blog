import { useState, useEffect, useContext } from "react";
import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog, Button } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { UserContext } from "@/shared/context";

export default function Home() {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useContext(UserContext);

  const [posts, setPosts] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [tagSearchInput, setTagSearchInput] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedPosts = await getPosts();
        const fetchedTags = await getTags();

        setPosts(
          fetchedPosts.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          )
        );
        setAllTags(fetchedTags);

        console.log("Fetched posts:", fetchedPosts);
        console.log("Fetched tags:", fetchedTags);
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      }
    };
    loadData();
  }, []); // 최초 마운트 시 한 번만 실행

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setTagSearchInput(value);
    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author: user.username,
    });
    const newPost = await getPostById(createResponse.postId);
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    console.log("new post", newPost);
  };

  const filteredTags = tagSearchInput
    ? allTags.filter((tag) =>
        tag.content.toLowerCase().includes(tagSearchInput.toLowerCase())
      )
    : allTags;

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
            value={tagSearchInput}
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {filteredTags.map((tag) => {
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
      {/* TODO: PostDialog 컴포넌트 구현 */}
      {isLoggedIn && (
        <div className="fixed bottom-10 right-10">
          <PostDialog
            triggerButton={<Button>등록</Button>}
            onSubmitSuccess={handleCreatePost}
            availableTags={allTags.map((tag) => tag.content)}
          />
        </div>
      )}
    </div>
  );
}
