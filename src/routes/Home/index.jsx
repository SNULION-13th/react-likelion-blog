import { posts } from "../../data/posts";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
          {/* TODO: 검색 결과 포스트 만들기 */}

          {posts.map((post,idx)=>(
            <Card key={idx} className="ml-2">
              <CardHeader  className="items-start text-left ">
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <CardDescription className="text-sm">{post.author.username}</CardDescription>
              </CardHeader>
              <CardContent className="items-start text-left">

                {post.tags.map((tag,idx)=>(
                <span key={idx} className="inline-block bg-orange-400  hover:bg-orange-500 text-sm text-white rounded-lg px-2 py-1 mr-1 mb-1">#{tag.content}</span>                ))}
     
              </CardContent>
              <CardFooter>
                {post.like_users.length > 0 && (
                  <span className="flex items-center gap-1">
                    <span>❤️</span>
                    <span>{post.like_users.length}</span>
                  </span>
                )}
              </CardFooter>
 
            </Card>
          ))}

        </div>
      </div>
    </>
  );
}
