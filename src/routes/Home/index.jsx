import { posts } from "../../data/posts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card.jsx";

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
              className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black border border-amber-500 bg-white"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="text-left">
                <CardTitle className="text-2xl font-bold text-left">
                  {post.title}
                </CardTitle>
                <div className="text-gray-500">{post.author.username}</div>
              </CardHeader>
              <CardContent className="text-left">{post.content}</CardContent>
              <CardFooter className="text-left">
                <div>
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="mr-2 text-sm bg-amber-500 text-white px-2 py-1 rounded-full"
                    >
                      #{tag.content}
                    </span>
                  ))}
                </div>
              </CardFooter>
              <div className="text-left px-6 py-5">
                ❤️ {post.like_users.length}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
