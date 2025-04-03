import { posts } from "../../data/posts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

import { Header, Input } from "@/shared/components";
// Home에는 받는 props가 없으므로 상위에서 그냥 <Home />을 호출하면 됨.
// 그리고 이 파일에는 딱 Home이라는 하나의 컴포넌트 호출 뿐.
// Header는 클래스 같은게 아니라 '컴포넌트'임. 그래서 ctrl + 클릭하면 들어가짐. 여기에 위에 버튼 같은 것들 다 정의가 되어있네.

export default function Home() {
  // 이 부분에서는 js 코드 작성(로직). 이후 return 부분에서 html 코드 작성하면 된다.
  // 그리고 js 로직은 위에서 받은 인자(props)들을 사용해서 작성하는 것. 근데 지금은 props가 없으므로 로직을 작성할게 딱히 없음.
  // 결국 아래에서 return html만 하면 되는데, 이 html 부분의 css부분을 tailwind로 작성하는 연습을 하는 것. 따로 .css 파일로 만들어도 당연히 됨.

  // 아래에서 card.jsx 이용해서 하면 될듯. 아 post는 데이터셋이고. 아 아니네 card는 signin, signup에서 사용하네..

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
          {/* TODO: 검색 결과 포스트 만들기 / 그리고 중괄호를 사용하면 이렇게 return 안에서도 js 문법을 사용할 수 있다.*/}
          {posts.map(
            (
              post // posts에 대해서 map이 하나의 요소마다 계속 반복되는 중임. 그리고 map 안에는 콜백 함수가 들어가있다.
            ) => (
              <Card key={post.id} className="p-5 mr-7">
                <CardTitle className="pb-2 text-left">{post.title}</CardTitle>
                <CardDescription className="pb-10 text-left">
                  {post.author.username}
                </CardDescription>
                <CardContent className="!p-0 !pl-1.5 !pb-6">
                  <div className="flex ">
                    {post.tags.map((tag) => (
                      <Tag key={tag.id} className="!p-0.25 !px-2 !m-0 !mr-1.5">
                        #{tag.content} {/* 태그 개수만큼 돌릴려면 map 필요. */}
                      </Tag>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 text-sm text-left">
                  {post.like_users.length > 0 && (
                    <>❤️ {post.like_users.length}</>
                  )}
                </CardFooter>
              </Card>
            )
          )}{" "}
          {
            // map으로 이렇게 반복문을 돌린 결과는 Card가 들어있는 배열인데, 이 배열을 그대로 리턴해줘도 알아서 리액트가 그려준다.
            // 그래서 map으로 돌린 결과를 return 안에서 바로 사용해도 된다.
          }
        </div>
      </div>
    </>
  );
}
