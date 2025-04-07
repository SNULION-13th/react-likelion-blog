import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useState, useEffect, useContext, use } from "react";
import { loginContext } from "@/shared/context/loginContext";
import { Button } from "@/shared/components/";

//HINT: State
// const posts = [];
// const searchTags = [];

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [dialogComponent, setDialogComponent] = useState(null);
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [sortedTags, setSortedTags] = useState([]); // State for sorted tags

  const { isLogin } = useContext(loginContext);

  const navigate = useNavigate();

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setSearchInput(value); // Update the search input state
    const filteredTags = tags.filter(
      (tag) => tag.content.toLowerCase().includes(value.toLowerCase()) // if using searchinput, the value is not updated yet
    );
    setSortedTags(filteredTags); // Update the sorted tags state with filtered tags
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);

    // Fetch the updated list of posts
    const updatedPosts = await getPosts();
    setPosts(updatedPosts); // Update the posts state
    // Fetch the updated list of tags
    const updatedTags = await getTags();
    setTags(updatedTags); // Update the tags state
  };

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    return posts;
    //setPosts(posts);
  };
  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
    return tags;
    // setTags(tags);
  };

  // TODO: 페이지 진입 시 최초 한 번만 태그와 게시글 정보들 불러오기
  useEffect(() => {
    // fetchPosts를 호출하는 비동기 함수를 정의합니다.
    const fetchPostEffect = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };
    fetchPostEffect();
  }, []);
  useEffect(() => {
    const fetchTagsEffect = async () => {
      const tags = await fetchTags();
      setTags(tags);
      setSortedTags(tags); // Initialize sortedTags with all tags
    };
    fetchTagsEffect();
  }, []);

  const writeButtonClick = () => {
    console.log("write button clicked");
    setDialogComponent(
      <PostDialog
        key={"post-dialog"}
        onClose={() => {
          setDialogComponent(null);
        }}
        title="게시글 작성"
        description="게시글을 자유롭게 작성해보세요"
        onSubmit={handleCreatePost}
      ></PostDialog>
    );
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
            value={searchInput}
            onChange={handleSearchTagInputChange}
          />
        </div>
        <div className="flex mt-5 justify-center flex-wrap">
          {sortedTags.map((tag) => {
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
      <div className="center mt-10">
        {isLogin ? <Button onClick={writeButtonClick}>작성</Button> : null}
      </div>
      {/* TODO: PostDialog 컴포넌트 구현 */}
      {dialogComponent}
    </div>
  );
}
