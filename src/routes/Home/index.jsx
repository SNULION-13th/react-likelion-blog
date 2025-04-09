import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useAuthMode } from "@/shared/context";
import { Button } from "@/shared/components";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

//HINT: State
export default function Home() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { user, isLoggedIn } = useAuthMode();

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
    console.log("search tag input change", value);
    setSearchTags(
      storedTags.filter((tag) => {
        return tag.content.startsWith(value);
      })
    );
  };

  const handleCreatePost = async (post, author) => {
    try {
      const createResponse = await createPost({
        ...post,
        author,
      });
      const newPost = await getPostById(createResponse.postId);
      console.log("new post", newPost);
      fetchPosts();
      fetchTags();
    } catch (error) {
      console.error(
        "Post creation failed:",
        error.response?.data || error.message
      );
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
      {/* TODO: PostDialog 컴포넌트 구현 */}
      {isLoggedIn && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mt-15">작성</Button>
          </DialogTrigger>
          <PostDialog
            isOpen={isDialogOpen}
            onSubmit={(post) => {
              handleCreatePost(post, user.username);
              setIsDialogOpen(false);
            }}
          />
        </Dialog>
      )}
    </div>
  );
}
