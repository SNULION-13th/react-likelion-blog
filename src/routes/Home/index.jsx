import { posts } from "../../data/posts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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
            <Card key={post.id} className="m-3">
              <CardHeader className="text-left">
                <CardTitle className="text-2xl font-bold">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm font-normal text-gray-500">
                  {post.author.username}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag.content}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <span className="text-red-500">❤️</span>
                  <span className="ml-1">{post.like_users.length}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
