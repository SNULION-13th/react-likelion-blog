import { posts } from "../../data/posts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const allTags = Array.from(
  new Map(
    posts
      .flatMap((post) => post.tags) // 모든 tags 모아 펼침
      .map((tag) => [tag.id, tag]) // Map으로 중복 제거
  ).values()
);

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
          <div className="flex flex-wrap justify-center gap-2 mb-6 mt-4">
            {allTags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs bg-amber-400 text-white px-3 py-1 rounded-md font-medium"
              >
                #{tag.content}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.author.username}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-amber-400 text-white px-2 py-1 rounded-md font-medium"
                  >
                    #{tag.content}
                  </span>
                ))}
              </CardContent>
              <CardFooter className="flex items-center gap-1 text-sm">
                <p>❤️ {post.like_users.length}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
