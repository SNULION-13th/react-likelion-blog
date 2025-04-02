//TODO: 회원가입 페이지 구현
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

export default function SignUp() {
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
            <CardTitle className="text-2xl">회원가입</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col space-y-2">
            <label
              htmlFor="userid"
              className="text-left text-bold text-m font-medium text-gray-700"
            >
              아이디
            </label>
            <Input
              id="userid"
              type="text"
              placeholder="아이디를 입력하세요"
              className="w-full"
            />
            <label
              htmlFor="password"
              className="text-left text-bold text-m font-medium text-gray-700"
            >
              비밀번호
            </label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full"
            />
            <label
              htmlFor="password_check"
              className="text-left text-bold text-m font-medium text-gray-700"
            >
              비밀번호 확인
            </label>
            <Input
              id="password_check"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full"
            />
            <label
              htmlFor="username"
              className="text-left text-bold text-m font-medium text-gray-700"
            >
              이름
            </label>
            <Input
              id="username"
              type="text"
              placeholder="이름을 입력하세요"
              className="w-full"
            />
            <label
              htmlFor="useremail"
              className="text-left text-bold text-m font-medium text-gray-700"
            >
              이메일
            </label>
            <Input
              id="useremail"
              type="text"
              placeholder="이메일을 입력하세요"
              className="w-full"
            />
            <label
              htmlFor="userschool"
              className="text-left text-bold text-m font-medium text-gray-700"
            >
              학교
            </label>
            <Input
              id="userschool"
              type="text"
              placeholder="학교를 입력하세요"
              className="w-full"
            />
            <label
              htmlFor="usermajor"
              className="text-left text-bold text-m font-medium text-gray-700"
            >
              전공
            </label>
            <Input
              id="usermajor"
              type="text"
              placeholder="전공을 입력하세요"
              className="w-full"
            />
          </CardContent>

          <CardFooter className="flex justify-center w-full">
            <Button>회원가입</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
