//TODO: 회원가입 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";

export default function SignUp() {
  return (
    <div>
      <Card className="w-full max-w-md mx-auto mt-24 bg-white p-8 rounded-xl shadow-md flex flex-col items-center">
        <div className="flex justify-center mb-6">
          <img src="src/assets/logo.png" alt="logo" className="h-20 mb-6" />
        </div>
        <h3 className="text-center text-2xl font-bold mb-6">회원가입</h3>
        <div className="w-full max-w-md mx-auto mb-4">
          <label className="block text-sm font-semibold mb-2 text-left">
            아이디
          </label>
          <Input
            type="text"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="아이디를 입력하세요"
          ></Input>
        </div>
        <div className="w-full max-w-md mx-auto mb-4">
          <label className="block text-sm font-semibold mb-2 text-left">
            비밀번호
          </label>
          <Input
            type="password"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="비밀번호를 입력하세요"
          ></Input>
        </div>
        <div className="w-full max-w-md mx-auto mb-4">
          <label className="block text-sm font-semibold mb-2 text-left">
            비밀번호 확인
          </label>
          <Input
            type="password"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="비밀번호를 입력하세요"
          ></Input>
        </div>
        <div className="w-full max-w-md mx-auto mb-4">
          <label className="block text-sm font-semibold mb-2 text-left">
            이름
          </label>
          <Input
            type="text"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="이름을 입력하세요"
          ></Input>
        </div>
        <div className="w-full max-w-md mx-auto mb-4">
          <label className="block text-sm font-semibold mb-2 text-left">
            이메일
          </label>
          <Input
            type="text"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="이메일을 입력하세요"
          ></Input>
        </div>
        <div className="w-full max-w-md mx-auto mb-4">
          <label className="block text-sm font-semibold mb-2 text-left">
            학교
          </label>
          <Input
            type="text"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="학교를 입력하세요"
          ></Input>
        </div>
        <div className="w-full max-w-md mx-auto mb-4">
          <label className="block text-sm font-semibold mb-2 text-left">
            전공
          </label>
          <Input
            type="text"
            className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="전공을 입력하세요"
          ></Input>
        </div>
        <div className="flex justify-center gap-4 mt-6 w-full">
          <Button>회원가입</Button>
        </div>
      </Card>
    </div>
  );
}
