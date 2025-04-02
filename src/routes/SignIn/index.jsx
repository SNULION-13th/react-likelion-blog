//TODO: 로그인 페이지 구현
import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/shared/components";
import { Input } from "@/shared/components";

import logo from "@/assets/logo.png";

export default function SignIn() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-full max-w-md p-6">
          <CardHeader className="flex flex-col items-center">
            <img
              src={logo}
              alt="logo"
              className="mb-3 w-40 h-40 object-contain"
            />
            <CardTitle className="text-2xl">로그인</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input
              type="text"
              placeholder="아이디를 입력하세요"
              className="w-full"
            />
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full"
            />
          </CardContent>

          <CardFooter className="flex justify-center gap-x-4">
            <Button>로그인</Button>
            <Button>회원가입</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
