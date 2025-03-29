import { posts } from "../../data/posts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
          <div className="flex justify-center items-center mt-6.5 gap-2 ">
            <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
              #멋사
            </button>
            <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
              #치즈
            </button>
            <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
              #냠냠
            </button>
            <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
              #멋쟁이김세안
            </button>
            <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
              #회장님
            </button>
            <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
              #연예인
            </button>
            <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
              #일잘러
            </button>
            <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
              #큐트
            </button>
            <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
              #쏘스윗
            </button>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px] gap-x-6">
          {/* TODO: 검색 결과 포스트 만들기 */}
          <Card className="w-full max-w-400 p-0 shadow-lg pt-0 pb-4 px-0">
            <CardHeader className="">
              <CardTitle className="text-left text-2xl">#1 Post</CardTitle>
              <p className="text-sm text-left font-bold text-gray-400">지호</p>
            </CardHeader>
            <CardContent className="mx-1.5 pt-6">
              <div className="flex gap-3">
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #멋사
                </button>
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #치즈
                </button>
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #냠냠
                </button>
              </div>
            </CardContent>
            <CardFooter className="pt-2 pb-4">
              <p>❤️2</p>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-400 p-0 shadow-lg pt-0 pb-4 px-0">
            <CardHeader className="">
              <CardTitle className="text-left text-2xl">#2 Post</CardTitle>
              <p className="text-sm text-left font-bold text-gray-400">수빈</p>
            </CardHeader>
            <CardContent className="mx-1.5 pt-6">
              <div className="flex gap-3">
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #멋사
                </button>
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #멋쟁이김세안
                </button>
              </div>
            </CardContent>
            <CardFooter className="pt-2 pb-4">
              <p>❤️1</p>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-400 p-0 shadow-lg pt-0 pb-4 px-0">
            <CardHeader className="">
              <CardTitle className="text-left text-2xl">#3 Post</CardTitle>
              <p className="text-sm text-left font-bold text-gray-400">록희</p>
            </CardHeader>
            <CardContent className="mx-1.5 pt-6">
              <div className="flex gap-3">
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #회장님
                </button>
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #연예인
                </button>
              </div>
            </CardContent>
            <CardFooter className="pt-2 pb-4">
              <p></p>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-400 p-0 shadow-lg pt-0 pb-4 px-0">
            <CardHeader className="">
              <CardTitle className="text-left text-2xl">#4 Post</CardTitle>
              <p className="text-sm text-left font-bold text-gray-400">지원</p>
            </CardHeader>
            <CardContent className="mx-1.5 pt-6">
              <div className="flex gap-3">
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #일잘러
                </button>
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #큐트
                </button>
              </div>
            </CardContent>
            <CardFooter className="pt-2 pb-4">
              <p>❤️3</p>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-400 p-0 shadow-lg pt-0 pb-4 px-0">
            <CardHeader className="">
              <CardTitle className="text-left text-2xl">#5 Post</CardTitle>
              <p className="text-sm text-left font-bold text-gray-400">예빈</p>
            </CardHeader>
            <CardContent className="mx-1.5 pt-6">
              <div className="flex gap-3">
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #멋사
                </button>
                <button className="!bg-yellow-500 !text-[12px] text-white font-bold !py-0.5 !px-2.5 rounded-md shadow-sm">
                  #쏘스윗
                </button>
              </div>
            </CardContent>
            <CardFooter className="pt-2 pb-4">
              <p>❤️1</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
