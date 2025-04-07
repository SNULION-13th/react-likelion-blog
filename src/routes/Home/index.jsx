import { SmallPost } from "./components/SmallPost";
import { Input, TagBadge, PostDialog } from "@/shared/components";
import { getPosts, getTags, getPostById } from "@/shared/api";
import { createPost } from "./api";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useUser } from "@/shared/context/userContext";

export default function Home() {
  //전역 변수로는 사용이 안된다는 오류가 떠서 함수 내부에 투입.
  const [posts, setPost] = useState([]);
  const [searchTags, setTags] = useState([]);
  const [storedTags, setStoredTags] = useState([]);

  const { user } = useUser(); // 유저 콘텍스트 api setUser에 담기. 여기서는 setUser 필요없지.

  const navigate = useNavigate();

  const fetchPosts = async () => {
    const posts = await getPosts();
    console.log("post fetch response", posts);
    setPost(posts); // posts를 setPost로 업데이트
  };

  const fetchTags = async () => {
    const tags = await getTags();
    console.log("tag fetch response", tags);
    setTags(tags); // tags를 setTags로 업데이트
  };

  const handleSearchTagInputChange = (e) => {
    const { value } = e.target;
    console.log("search tag input change", value); // 제대로 입력되는지 확인용.
    setStoredTags(value); // 태그 검색어를 저장함.
  };

  const handleCreatePost = async (post, author) => {
    const createResponse = await createPost({
      ...post,
      author,
    });
    const newPost = await getPostById(createResponse.postId);
    fetchPosts();
    fetchTags();
    console.log("new post", newPost); // 새로 생성 시 다시 fetch.
  };

  const filteredTags = searchTags.filter(
    (tag) => !storedTags || tag.content.includes(storedTags)
  ); //태그 필터링. 스트링 매칭을 생각했는데, includes가 똑같다고 하더라고요.

  // TODO: 페이지 진입 시 최초 한 번만 태그와 게시글 정보들 불러오기
  useEffect(() => {
    fetchPosts();
    fetchTags();
  }, []);

  return (
    console.log(searchTags), // searchTags의 형식 확인용. 태그 이름이 content로 저장되는 것 확인.
    (
      <div className="pb-20 pt-14">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-6xl text-black">my blog</h1>
          </div>
          <div className="w-[90vw] max-w-md flex justify-center">
            <Input
              value={storedTags}
              onChange={handleSearchTagInputChange}
              type="text"
              placeholder="태그를 검색하세요"
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
        {
          /* TODO: PostDialog 컴포넌트 구현 */
          user && <PostDialog onSubmit={handleCreatePost} />
        }
      </div>
    )
  );
}
