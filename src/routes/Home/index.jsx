import { posts } from "../../data/posts";

import { Header, Input } from "@/shared/components";

import { Button } from "@/shared/components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  const postArray = posts || [];
  /* 검색창 밑의 태그들을 위한 tagArray 구현부 */
  const tagArray = [];
  for (let i = 0; i < postArray.length; i++) {
    let tags = postArray[i].tags;
    for (let j = 0; j < tags.length; j++) {
      if (!tagArray.includes(tags[j].content)) {
        tagArray.push(tags[j].content);
      }
    }
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
          {/* 태그 여러개 나타나는 부분 */}
          <div className="flex flex-row gap-3 mt-6">
            {tagArray.map((tag) => {
              return (
                <div className="bg-orange-400 text-white text-sm px-3 py-1 rounded-lg">
                  #{tag}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px] gap-x-8">
          {
            /* TODO: 검색 결과 포스트 만들기 */
            postArray.map((post) => {
              return (
                <Card
                  key={post.id}
                  className="aspect-square flex flex-col justify-between"
                >
                  <CardHeader className="text-left">
                    <div className="text-2xl font-extrabold">{post.title}</div>
                    <div className="test-sm text-muted-foreground font-semibold">
                      {post.author.username}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-row gap-3">
                      {post.tags.map((tag) => {
                        return (
                          <div className="bg-orange-400 text-white text-sm px-3 py-1 rounded-lg">
                            #{tag.content}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardFooter>
                    {post.like_users.length > 0 ? (
                      <div className="text-left">
                        ❤️ {post.like_users.length}
                      </div>
                    ) : (
                      <div className="invisible">.</div>
                    )}
                  </CardFooter>
                </Card>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
