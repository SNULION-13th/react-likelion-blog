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
              className="border rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.content}</p>
              <div className="text-sm text-gray-500 mb-2">
                by {post.author.username} on{" "}
                {new Date(post.created_at).toLocaleDateString()}
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-gray-200 rounded-full px-2 py-1 text-xs"
                  >
                    {tag.content}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
