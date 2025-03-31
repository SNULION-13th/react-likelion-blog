import { posts } from "../../data/posts";

import { Header, Input } from "@/shared/components";

/*태그들을 중복없이 뽑아내는 함수 선언*/
function uniqueTags() {
  const tags = posts.flatMap((post) => post.tags.map((tag) => tag.content));
  const uniqueTags = [...new Set(tags)];
  return uniqueTags;
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col py-14">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-6xl text-black">my blog</h1>
          </div>
          <div className="w-[90vw] max-w-md flex justify-center">
            <Input
              className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>
        </div>

        {/* 함수 호출 및 map 사용해서 태그 쭉 나열하기 */}
        <div className="flex justify-center">
          {uniqueTags().map((tag) => {
            return (
              <span className="text-xs text-white font-semibold bg-amber-500 rounded-md px-2 py-1 mr-2 mb-6">
                #{tag}
              </span>
            );
          })}
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => {
            return (
              <div className="border-1 border-gray rounded-2xl p-6 ml-5 mr-5 bg-white shadow-md hover:shadow-lg transition-shadow duration-100">
                {/* 박스 내부 타이틀 */}
                <p className="w-full flex justify-left text-2xl font-bold font-mono text-black mb-2">
                  {post.title}
                </p>
                {/* 박스 포스팅한 사람*/}
                <p className="w-full flex justify-left text-sm text-gray-400 mb-14">
                  {post.author.username}
                </p>
                {/* 박스에 붙은 태그들 */}
                <p className="w-full flex justify-left">
                  {post.tags.map((tag) => {
                    return (
                      <span className="text-xs text-white font-semibold bg-amber-500 rounded-md px-2 py-1 mr-2 mb-6">
                        #{tag.content}
                      </span>
                    );
                  })}
                </p>

                {/* 박스 좋아요 수 */}
                <p className="w-full flex justify-left text-lg text-black font-bold">
                  {post.like_users.length > 0
                    ? `❤️${post.like_users.length}`
                    : null}
                  {/* 삼항 연산자로 처리 */}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
