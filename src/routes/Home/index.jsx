import { posts } from "../../data/posts";
import {
  Card, 
  CardHeader,
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
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
          {posts.map((post, index) =>(
            <Card key = {index} class="border rounded-xl shadow-md p-1 mb-1 mx-4" >
            <CardHeader>
              <CardTitle className="text-2xl text-start font-bold tracking-tight mb-1">{post.title}</CardTitle>
              <CardDescription className="text-sm text-start text-gray-600 mb-4">{post.author.username}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
            {post.tags.map((Tag,index) => (
              <span key = {index} className="text-sm font-medium bg-amber-400 text-white py-1 px-2 rounded-lg">
                #{Tag.content}
              </span>
            ))}
            </CardContent>
            <CardFooter className="flex items-center">
            {post.like_users.length > 0 && (
            <div>
            <span>❤️</span>
            <span className="text-sm text-gray-600">{post.like_users.length}</span>
            </div>
            )}
            </CardFooter>
          </Card>
          ))}
        </div>
      </div>
    </>
  );
}
