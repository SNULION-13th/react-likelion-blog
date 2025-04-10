import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge,PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/shared/context";
import { Button } from "@/shared/components";
//HINT: State

const searchTags = [];

export default function Home() {

  const [posts, setPosts]= useState([]);
  const [tags, setTags]= useState([]);
  const {user} = useContext(UserContext);
  const [isPosting, setIsPosting]=useState(false);
  const [tagSearch, setTagSearch] = useState(""); 
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    setPosts(posts)
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
    setTags(tags)
  };

  //태그 검색용
  const allTags = posts.flatMap((post) => post.tags || []);
  
  const uniqueTags = Array.from(
    new Map(allTags.map((tag) => [tag.id, tag])).values()
  );
  
  const filteredTags = uniqueTags.filter((tag) =>
    tag.content.toLowerCase().includes(tagSearch.toLowerCase())
  );
  

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    setTagSearch(value); 
    console.log("search tag input change", value);
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      tags: post.tags,
      author: user.username,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost);
    setPosts((prev) => [...prev, newPost]);
    setIsPosting(false);
    
  };

  // TODO: 페이지 진입 시 최초 한 번만 태그와 게시글 정보들 불러오기
  useEffect(()=>{
    fetchPosts()
    fetchTags()
  },[])

  return (
    <div className="pb-20 pt-14">
      <div className="flex flex-col justify-center items-center mb-5">
        <div className="w-full mb-16 flex justify-center">
          <h1 className="uppercase text-6xl text-black">my blog</h1>
        </div>
        <div className="w-[90vw] max-w-md flex justify-center">
          <Input type="text" value={tagSearch} onChange={handleSearchTagInputChange} placeholder="태그를 검색하세요" />
        </div>

        <div className="mt-7">
          {filteredTags.map((tag) => (
            <span
              key={tag.id}
              className="inline-block bg-orange-400 hover:bg-orange-500 text-xs text-white rounded-lg px-2 py-1 mr-1 mb-1 cursor-pointer"
            >
              #{tag.content}
            </span>
          ))}
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
      {user && (
        <Button 
          type="button" 
          className="mt-3 text-sm" 
          onClick={()=>setIsPosting(true)}>
          작성
        </Button>
      )}
      {/* TODO: PostDialog 컴포넌트 구현 */}
      {isPosting && (
          <PostDialog
          onSubmit={handleCreatePost}
          onClose={() => setIsPosting(false)}
        />
      )}


    </div>
  );
}
