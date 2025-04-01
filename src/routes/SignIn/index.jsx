//TODO: 로그인 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";

export default function SignIn() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[410px] p-5 flex flex-col items-center">
          <div>
            <img
              src="src/assets/logo.png"
              alt="logo img"
              className="h-30 w-30 object-contain"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-5 ">로그인</h2>
            <div className="w-93">
              <Input
                className="mb-1 w-full px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 selection:bg-amber-300 selection:text-black"
                type="text"
                placeholder="아이디를 입력하세요"
              />
              <Input
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 selection:bg-amber-300 selection:text-black"
                type="text"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
          </div>

          <div className="flex p-5 gap-1">
            <Button>로그인</Button>
            <Button>회원가입</Button>
          </div>
        </Card>
      </div>
    </>
  );
}
