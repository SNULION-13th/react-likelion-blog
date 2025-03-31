import { posts } from "../../data/posts";

import { Header, Input } from "@/shared/components";
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

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-xl p-4 shadow-md flex flex-col justify-between min-h-[180px]"
            >
              <div>
                <h2 className="font-bold text-lg mb-1">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  {post.author.username}
                </p>

                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-amber-400 text-white text-xs px-2 py-0.5 rounded-full"
                    >
                      #{tag.content}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center mt-4 text-sm text-red-500">
                ❤️ {post.like_users.length}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
