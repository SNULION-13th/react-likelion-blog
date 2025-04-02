import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        <div className="mx-auto w-2xl px-10 flex flex-wrap gap-1">
          {uniqueTags.map((tag) => (
            <Tag key={tag.id}>{tag.content}</Tag>
          ))}
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="mb-4 shadow-md h-[230px] flex flex-col justify-start"
            >
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.author.username}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Tag>{tag.content}</Tag>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-y-3">
                🩷{post.like_users.length}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

function Tag({ children }) {
  return (
    <span className="bg-orange-400 text-white px-[8px] py-[3px] rounded-[7px] text-[13px]">
      #{children}
    </span>
  );
}

// 모든 태그를 하나의 배열로 모으고 중복 제거
const uniqueTags = [
  ...new Map(
    posts.flatMap((post) => post.tags).map((tag) => [tag.content, tag]) // key: content로 중복 제거
  ).values(),
];
