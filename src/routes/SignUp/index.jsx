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

//TODO: 회원가입 페이지 구현
export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader className="pb-0 pt-0">
          <div className="flex justify-center mx-auto">
            <img src={logo} alt="logo" className="w-45 h-auto" />
          </div>
        </CardHeader>
        <CardTitle className="text-2xl font-bold pb-3">회원가입</CardTitle>
        <CardContent className="flex flex-col items-center gap-3 w-md">
          <div className="w-full flex flex-col gap-1">
            <span className="flex flex-start font-semibold">아이디</span>
            <Input type="text" placeholder="아이디를 입력하세요" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className="flex flex-start font-semibold">비밀번호</span>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className="flex flex-start font-semibold">비밀번호 확인</span>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className="flex flex-start font-semibold">이름</span>
            <Input type="text" placeholder="이름을 입력하세요" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className="flex flex-start font-semibold">이메일</span>
            <Input type="text" placeholder="이메일을 입력하세요" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className="flex flex-start font-semibold">학교</span>
            <Input type="text" placeholder="학교를 입력하세요" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className="flex flex-start font-semibold">전공</span>
            <Input type="text" placeholder="전공 입력하세요" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="w-full">
            <Button asChild>
              <span className="block w-full !font-bold">회원가입</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
