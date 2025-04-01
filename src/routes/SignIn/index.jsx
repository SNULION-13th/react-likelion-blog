// ⬇️추가
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

//TODO: 로그인 페이지 구현
export default function SignIn() {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <Card className="w-[350px] shadow-md">
        <CardHeader className="flex items-center justify-center">
          <div className="mb-2">
            <img src={logo} alt="logo" className="h-30 w-auto"></img>
          </div>
          <CardTitle className="text-xl text-center">로그인</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="아이디를 입력하세요" />
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <Button className="w-full hover:!bg-amber-500 hover:text-white text-black">로그인</Button>
          <Button className="w-full hover:!bg-amber-500 hover:text-white text-black">회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  )
}


