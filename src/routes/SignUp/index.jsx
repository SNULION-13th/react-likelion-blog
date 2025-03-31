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

//TODO: 회원가입 페이지 구현
export default function SignUp() {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <Card className="w-[350px] shadow-md">
        <CardHeader className="flex items-center justify-center">
          <div className="mb-2">
            <img src={logo} alt="logo" className="h-30 w-auto"></img>
          </div>
          <CardTitle className="text-xl text-center">회원가입</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-left">
          <label className="text-sm font-bold">아이디</label>
          <Input placeholder="아이디를 입력하세요" />
          <label className="text-sm font-bold">비밀번호</label>
          <Input type="password" placeholder="비밀번호를 입력하세요" />
          <label className="text-sm font-bold">비밀번호 확인</label>
          <Input placeholder="비밀번호를 입력하세요" />
          <label className="text-sm font-bold">이름</label>
          <Input placeholder="이름을 입력하세요" />
          <label className="text-sm font-bold">이메일</label>
          <Input placeholder="이메일을 입력하세요" />
          <label className="text-sm font-bold">학교</label>
          <Input placeholder="학교를 입력하세요" />
          <label className="text-sm font-bold">전공</label>
          <Input placeholder="전공 입력하세요" />
        </CardContent>
        <CardFooter className="flex">
          <Button className="w-full bg-[#8b8b8b] hover:!bg-amber-500 hover:text-white text-black">회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
