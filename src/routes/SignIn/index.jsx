//TODO: 로그인 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";

export default function SignIn() {
  return (
    <div>
      <Card className="w-full max-w-md mx-auto mt-24 bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
        <div className="flex justify-center mb-6">
          <img src="src/assets/logo.png" alt="logo" className="h-20 mb-6" />
        </div>
        <h3 className="text-center text-2xl font-bold mb-6">로그인</h3>
        <Input
          type="text"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="아이디를 입력하세요"
        ></Input>
        <Input
          type="password"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
          placeholder="비밀번호를 입력하세요"
        ></Input>
        <div className="flex justify-center gap-4 mt-4 w-full">
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </Card>
    </div>
  );
}
