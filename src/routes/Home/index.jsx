import { posts } from "../../data/posts";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Header, Input } from "@/shared/components";

export default function Home() {
  const allTags = posts.reduce((acc, post) => {
    return acc.concat(post.tags);
  }, []);
  const shuffledTags = [...allTags].sort(() => 0.5 - Math.random());
  const selectedTags = [];
  for (let i = 0; i < Math.min(7, shuffledTags.length); i++) {
    selectedTags.push(shuffledTags[i]);
  }

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
          <div className="mt-2 flex flex-wrap gap-1 justify-center px-4">
            {selectedTags.map((tag) => (
              <span
                key={tag.id}
                className="inline-block bg-orange-400 text-white text-xs font-semibold px-2.5 py-0.5 rounded"
              >
                #{tag.content}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col justify-between">
              <CardHeader className="text-left">
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="italic text-gray-700 font-medium">
                  {post.author.username}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col items-start gap-2">
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="inline-block bg-orange-400 text-white text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      #{tag.content}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500 flex items-center">
                  <span className="text-red-500 ml-1">❤️</span>
                  {post.like_users.length}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
