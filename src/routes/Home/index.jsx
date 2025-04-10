import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import { SignInContext } from "@/App"; // SignInContext를 가져온다.

// import { posts } from "@/data/posts";

//HINT: State

//const posts = [];

//const searchTags = [];

//const storedTags = [];

// 이래야지 export해서 postdialog에서 쓸 수 있다.

export default function Home() {
  const navigate = useNavigate();

  // state 선언.
  const [posts, setPosts] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]);

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    setPosts(posts); // getPost를 이용해서 받아온 데이터를 state에 저장한다.
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
    setSearchTags(tags); // post랑 tag 둘 다 initialize
    setStoredTags(tags);
  };

  const handleCreatePost = async (post, author) => {
    // export 못쓰니까 그냥 props로 아래로 넘겨야함.
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    console.log("new post", newPost); // newPost를 posts에 할당해야할듯하다.. -> context로 전역변수로 관리하자.
    setPosts((prevPosts) => [...prevPosts, newPost]); // posts를 업데이트.

    const tags = await getTags();
    console.log("tag fetch response", tags);
    setSearchTags(tags);
    setStoredTags(tags);
  };

  // useEffect를 이용해서, fetchPosts 함수를 호출. 최초 한번만 실행. post를 바로 받아오면 이상이 있대.
  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value);

    const lowerCased = value.toLowerCase();
    const filtered = searchTags.filter((tag) =>
      tag.content.toLowerCase().includes(lowerCased)
    );
    setStoredTags(filtered); // 검색된 태그들만 업데이트한다. searchTag들 중에 검색된거 포함한 애들만 있는 배열.
  };

  // TODO: 페이지 진입 시 최초 한 번만 태그와 게시글 정보들 불러오기

  // state 불러오기.
  const { sign, setSign } = useContext(SignInContext);

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
          {storedTags.map((tag) => {
            return <TagBadge key={tag.id} tag={tag} />; // 태그 검색하면 해당 태그만 보이도록..
          })}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
        {posts.map(
          (
            post // 각각의 posts 요소에 대해서 div를 생성한다. 이게 post를 최초로 불러오는 거지.
          ) => (
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
          )
        )}
      </div>
      {
        /* TODO: 로그인한 유저 정보가 있을 때에만 게시글 작성 버튼이 나타난다. */
        // SignIn 상태일때만 작성 버튼이 보이도록.
        sign === "SignIn" && (
          <div className="flex justify-center mt-20">
            {
              /* TODO: PostDialog 컴포넌트 구현 */
              <PostDialog
                onCreatePost={handleCreatePost}
                onTagUpdate={fetchTags}
              >
                {" "}
              </PostDialog>
            }
          </div>
        )
      }
    </div>
  );
}
