//TODO: 로그인 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import logo from "@/assets/logo.png";
import { Button } from "@/shared/components";
import { Input } from "@/shared/components";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader className="pb-0">
          <div className="flex justify-center mx-auto">
            <img src={logo} alt="logo" className="w-50 h-auto" />
          </div>
        </CardHeader>
        <CardTitle className="text-2xl font-bold pb-5">로그인</CardTitle>
        <CardContent className="w-md flex flex-col gap-2">
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            className="font-semibold"
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="font-semibold"
          />
        </CardContent>
        <CardFooter className="flex justify-center gap-2 pb-15">
          <Button asChild>
            <span className="!font-bold">로그인</span>
          </Button>
          <Button asChild>
            <span className="!font-bold">회원가입</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
