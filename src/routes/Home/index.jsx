import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useUser } from "@/shared/context";

//HINT: State

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]); // 검색 시 렌더링되는 태그
  const [storedTags, setStoredTags] = useState([]); // 현재까지 입력받은 모든 태그
  const navigate = useNavigate();
  const { user, toggleUser } = useUser();

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
    console.log("post fetch response", posts);
  };

  const fetchTags = async () => {
    const tags = await getTags();
    setSearchTags(tags);
    setStoredTags(tags);
    console.log("tag fetch response", tags);
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);
    if (value.trim()) {
      console.log("searchTags:", searchTags);
      const filteredTags = storedTags.filter((tag) => {
        console.log(tag.content);
        return tag.content.startsWith(value);
      });
      setSearchTags(filteredTags);
    } else {
      setSearchTags(storedTags);
    }
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);
    setPosts([...posts, newPost]); // 새 포스트 렌더링
    const newTags = [
      // 새로운 태그만 검색창 아래에 추가해서 렌더링
      ...storedTags,
      ...newPost.tags.filter((tag) => !searchTags.some((t) => t.id === tag.id)),
    ];
    console.log("newTags:", newTags);
    setStoredTags(newTags);
    setSearchTags(newTags);
  };

  // TODO: 페이지 진입 시 최초 한 번만 태그와 게시글 정보들 불러오기
  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
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
      {/* TODO: 로그인한 유저 정보가 있을 때에만 게시글 작성 버튼이 나타난다. */}

      {user ? (
        <div className="pt-14">
          <PostDialog
            triggerName={"작성"}
            onSubmitPost={handleCreatePost}
            userName={user.username}
          ></PostDialog>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
