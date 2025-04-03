import { useState } from "react";
import { posts } from "../../data/posts";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Header, Input, Button } from "@/shared/components";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  /*
   * useState: 두 개의 값 반환
   * 첫 번째 값: 현재 상태의 값
   * 두 번째 값: 상태를 업데이트하는 함수
   */

  const filteredPosts = searchTerm
    ? posts.filter((post) =>
        post.tags.some((tag) => tag.content.includes(searchTerm))
      )
    : posts;
  /*
   * filteredPosts: posts 배열에서 검색어를 포함하는 post만 필터링한 결과
   * 검색어가 없을 경우: posts 배열 전체를 반환
   */

  return (
    <>
      <Header />
      <div className="flex flex-col py-14">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-6xl font-extrabold text-black">
              my blog
            </h1>
          </div>
          <div className="w-[90vw] max-w-md flex justify-center">
            <Input
              className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black rounded-lg"
              type="text"
              placeholder="태그를 검색하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              /*
               * onChange: input의 값이 변경될 때마다 호출되는 이벤트 핸들러
               * setSearchTerm: 변경되는 input의 값을 searchTerm에 저장
               */
            />
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-3 mt-5">
            {/* 검색어를 포함하는 태그 버튼들 */}
            {/* Array: Set을 Array로 변환하여 map적용*/}
            {/* filteredPosts: 검색어를 포함하는 post만 필터링한 결과 */}
            {/* filteredPosts.flatMap: 각 post의 tags 배열을 1차원으로 변환하여 filter와 map을 바로 적용 */}
            {/* Set: 중복된 값을 제거하여 유일한 값만 남김 */}
            {/* map: tag.content만 추출하여 새로운 배열 생성 */}
            {Array.from(
              new Set(
                filteredPosts
                  .flatMap((post) => post.tags)
                  .filter((tag) => tag.content.includes(searchTerm))
                  .map((tag) => tag.content)
              )
            ).map((content) => (
              <Button
                key={content}
                className="bg-amber-400 text-white px-2 py-1 rounded-lg pointer-events-none"
                asChild
              >
                <span className="block font-bold">#{content}</span>
              </Button>
            ))}
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-y-6 gap-x-50 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {/* 검색어를 포함하는  카드들 */}
          {/* filteredPosts.map: 각 post에 대해 Card 컴포넌트를 생성 */}
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="w-[320px] h-[320px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col rounded-lg"
            >
              <CardHeader className="flex flex-col items-start">
                <CardTitle className="text-left text-xl font-extrabold mt-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-left text-sm text-gray-500">
                  {post.author.username}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-end items-start flex-grow pb-10 gap-3">
                <div className="flex flex-row gap-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <Button
                      key={tag.id}
                      className="bg-amber-400 text-white px-2 py-1 rounded-lg pointer-events-none"
                      asChild
                    >
                      <span className="block font-bold">#{tag.content}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start pb-10">
                <span className="text-bold text-gray-600 font-bold">
                  ❤️{post.like_users.length}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
