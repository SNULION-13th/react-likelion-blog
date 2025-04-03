//TODO: 회원가입 페이지 구현

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Card className="w-100">
        <CardHeader className="items-center w-full h-auto">
          <img
            src="/src/assets/logo.png"
            alt="로고 이미지"
            class="w-40 h-auto"
          />
        </CardHeader>
        <CardTitle>회원가입</CardTitle>
        <div className="flex justify-center ">
          <div className="w-90 text-left">아이디</div>
        </div>
        <div className="flex justify-center pb-4">
          <Input type="ID" placeholder="아이디를 입력하세요" className="mt-2" />
        </div>
        <div className="flex justify-center ">
          <div className="w-90 text-left">비밀번호</div>
        </div>
        <div className="flex justify-center pb-4">
          <Input
            type="ID"
            placeholder="비밀번호를 입력하세요"
            className="mt-2"
          />
        </div>
        <div className="flex justify-center ">
          <div className="w-90 text-left">비밀번호 확인</div>
        </div>
        <div className="flex justify-center pb-4">
          <Input
            type="ID"
            placeholder="비밀번호를 입력하세요"
            className="mt-2"
          />
        </div>
        <div className="flex justify-center ">
          <div className="w-90 text-left">이름</div>
        </div>
        <div className="flex justify-center pb-4">
          <Input type="ID" placeholder="이름을 입력하세요" className="mt-2" />
        </div>
        <div className="flex justify-center ">
          <div className="w-90 text-left">이메일</div>
        </div>
        <div className="flex justify-center pb-4">
          <Input type="ID" placeholder="이메일을 입력하세요" className="mt-2" />
        </div>
        <div className="flex justify-center ">
          <div className="w-90 text-left">학교</div>
        </div>
        <div className="flex justify-center pb-4">
          <Input type="ID" placeholder="학교를 입력하세요" className="mt-2" />
        </div>
        <div className="flex justify-center ">
          <div className="w-90 text-left">전공</div>
        </div>
        <div className="flex justify-center pb-5">
          <Input
            type="password"
            placeholder="전공을 입력하세요"
            className="mt-2"
          />
        </div>
        <div className="pb-5">
          <Button className="text-black font-bold w-90">회원가입</Button>
        </div>
      </Card>
    </div>
  );
}
