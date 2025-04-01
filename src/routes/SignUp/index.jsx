//TODO: 회원가입 페이지 구현
import { Card } from "@/components/ui/card";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";

export default function SignUp() {
  return (
    <>
      <div className="mt-3 mb-3 h-screen flex justify-center items-center">
        <Card className="w-[410px] h-full p-2 flex flex-col items-center">
          <div>
            <img
              src="src/assets/logo.png"
              alt="logo img"
              className="h-30 w-30 object-contain"
            />
            <h2 className="text-xl font-bold mb-5 ">회원가입</h2>
          </div>
          <div className="flex flex-col space-y-3 text-left w-93 p-1 font-semibold text-sm">
            <div>
              <label className="block mb-1">아이디</label>
              <Input
                className="w-full py-2 border border-gray-300 rounded focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-amber-500 selection:bg-amber-300 selection:text-black"
                type="text"
                placeholder="아이디를 입력하세요"
              />
            </div>
            <div>
              <label className="block mb-1">비밀번호</label>
              <Input
                className="w-full py-2 border border-gray-300 rounded focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-amber-500 selection:bg-amber-300 selection:text-black"
                type="text"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <div>
              <label className="block mb-1">비밀번호 확인</label>
              <Input
                className="w-full py-2 border border-gray-300 rounded focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-amber-500 selection:bg-amber-300 selection:text-black"
                type="text"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <div>
              <label className="block mb-1">이름</label>
              <Input
                className="w-full py-2 border border-gray-300 rounded focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-amber-500 selection:bg-amber-300 selection:text-black"
                type="text"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div>
              <label className="block mb-1">이메일</label>
              <Input
                className="w-full py-2 border border-gray-300 rounded focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-amber-500 selection:bg-amber-300 selection:text-black"
                type="text"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div>
              <label className="block mb-1">학교</label>
              <Input
                className="w-full py-2 border border-gray-300 rounded focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-amber-500 selection:bg-amber-300 selection:text-black"
                type="text"
                placeholder="학교를 입력하세요"
              />
            </div>
            <div>
              <label className="block mb-1">전공</label>
              <Input
                className="w-full py-2 border border-gray-300 rounded focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-amber-500 selection:bg-amber-300 selection:text-black"
                type="text"
                placeholder="전공을 입력하세요"
              />
            </div>
            <Button>
              <span className="font-semibold text-sm">회원가입</span>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
