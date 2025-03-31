//TODO: 회원가입 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center py-14">
        <Card className="w-full max-w-md p-8 shadow-lg pt-0 pb-4 px-0">
          <CardHeader className="mt-0 gap-0">
            <div className="flex justify-center items-center ">
              <img
                src="src/assets/logo.png"
                alt="logo"
                className="w-50 h-50 mb-0"
              />
            </div>
            <CardTitle className="text-2xl">회원가입</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-0 justify-start">
                <p className="mx-2 font-bold text-left text-base text-black-500 mb-2">
                  아이디
                </p>
                <input
                  className="px-3 h-10 border border-gray-300 rounded-md focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
                  type="text"
                  placeholder="아이디를 입력하세요"
                />
              </div>
              <div className="flex flex-col gap-0 justify-start">
                <p className="mx-2 font-bold text-left text-base text-black-500 mb-2">
                  비밀번호
                </p>
                <input
                  className="px-3 h-10 border border-gray-300 rounded-md focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
              <div className="flex flex-col gap-0 justify-start">
                <p className="mx-2 font-bold text-left text-base text-black-500 mb-2">
                  비밀번호 확인
                </p>
                <input
                  className="px-3 h-10 border border-gray-300 rounded-md focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
              <div className="flex flex-col gap-0 justify-start">
                <p className="mx-2 font-bold text-left text-base text-black-500 mb-2">
                  이름
                </p>
                <input
                  className="px-3 h-10 border border-gray-300 rounded-md focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
                  type="text"
                  placeholder="이름을 입력하세요"
                />
              </div>
              <div className="flex flex-col gap-0 justify-start">
                <p className="mx-2 font-bold text-left text-base text-black-500 mb-2">
                  이메일
                </p>
                <input
                  className="px-3 h-10 border border-gray-300 rounded-md focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
                  type="text"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div className="flex flex-col gap-0 justify-start">
                <p className="mx-2 font-bold text-left text-base text-black-500 mb-2">
                  학교
                </p>
                <input
                  className="px-3 h-10 border border-gray-300 rounded-md focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
                  type="text"
                  placeholder="학교를 입력하세요"
                />
              </div>
              <div className="flex flex-col gap-0 justify-start">
                <p className="mx-2 font-bold text-left text-base text-black-500 mb-2">
                  전공
                </p>
                <input
                  className="px-3 h-10 border border-gray-300 rounded-md focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
                  type="text"
                  placeholder="전공을 입력하세요"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center items-center gap-1 w-full">
            <div className="flex justify-center items-center gap-1 w-full">
              <button className="!font-bold w-full px-4 py-2 bg-black text-black  rounded-md hover:!bg-yellow-500 hover:text-white shadow-sm">
                회원가입
              </button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
