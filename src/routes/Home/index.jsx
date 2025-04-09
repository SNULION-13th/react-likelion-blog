import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useState, useEffect, useContext, createContext } from "react";
import { useUser } from "../../shared/context/userContext.jsx";
import { Button } from "@/shared/components";

 //HINT: State

export default function Home() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const { user } = useUser();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchTags, setSearchTags] = useState("");
    const [storedTags, setStoredTags] = useState([]);
    const [filteredTags, setFilteredTags] = useState([]);
  

    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
      console.log("post fetch response", posts);
    };

    const fetchTags = async () => {
      const tags = await getTags();
      console.log("tag fetch response", tags);
      setStoredTags(tags);           // 전체 태그 저장
      setFilteredTags(tags);
    };

    useEffect(() => {
      fetchPosts();
      fetchTags();
    },[]);
    

    const handleSearchTagInputChange = (e) => {
      const { value } = e.target;
      setSearchTags(value);
      console.log("search tag input change", value);

      const filtered = storedTags.filter((tag) =>
        tag.content.includes(value)
      ); 
      setFilteredTags(filtered);
    };
    


    const handleCreatePost = async (post, author) => {
      const createResponse = await createPost({
        ...post,
        author,
      });
      const newPost = await getPostById(createResponse.postId);
      console.log("new post", newPost);
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
              value={searchTags}
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
        {user && (
          <div className="flex justify-center">
            <Button
              onClick={() => setIsDialogOpen(true)}
              className= "mt-8 hover:bg-orange-400"
            >
              게시글 작성
            </Button>
          </div> 
        )}

        {/* TODO: PostDialog 컴포넌트 구현 */}
        {isDialogOpen && (
          <PostDialog
            onClose={() => setIsDialogOpen(false)}
            onCreatePost={async (post) => {
              await handleCreatePost(post, user.username);
              await fetchPosts(); // 등록 후 새로고침
            }}
          />
        )}
      </div>
    );
  }