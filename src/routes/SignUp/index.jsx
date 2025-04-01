//TODO: 회원가입 페이지 구현
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { Input } from "@/shared/components/Input"

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-auto">
      <Card className="w-[400px] rounded-xl shadow-md h-auto m-5 w-120">
        <CardHeader className="flex flex-col items-center justify-center p-6">
          <img src={logo} className="h-40 w-40 " alt="Logo" />
          <CardTitle className="text-2xl font-semibold text-gray-800">회원가입</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-bold text-start ml-1 mb-2" >아이디</label>
            <Input
              type="text"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-bold text-start ml-1 mb-2">비밀번호</label>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-bold text-start ml-1 mb-2">비밀번호 확인</label>
            <Input
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-bold text-start ml-1 mb-2">이름</label>
            <Input
              type="text"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-bold text-start ml-1 mb-2">이메일</label>
            <Input
              type="email"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-bold text-start ml-1 mb-2">학교</label>
            <Input
              type="text"
              placeholder="학교를 입력하세요"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-bold text-start ml-1 mb-2">전공</label>
            <Input
              type="text"
              placeholder="전공을 입력하세요"
            />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-center ">
          <p className="p-2 w-110 rounded-md shadow-md text-lg bg-stone-100 text-black font-bold hover:!bg-amber-400 hover:text-white">
            회원가입
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

