import { posts } from "../../data/posts";
import CardPost from "@/components/CardPost";
import { Button } from "@/components/ui/button";
import { Header, Input } from "@/shared/components";

export default function Home() {
  const allTags = Array.from(
    new Map(
      posts.flatMap((post) => post.tags).map((tag) => [tag.id, tag])
    ).values()
  );

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
          <div className="flex flex-wrap justify-center">
            {allTags.map((tag) => (
              <Button
                key={tag.id}
                variant="outline"
                size="sm"
                className="text-white !text-sm !bg-amber-500 !px-3 !py-0 mx-1 mt-4 !rounded-xl"
              >
                #{tag.content}
              </Button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <CardPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
