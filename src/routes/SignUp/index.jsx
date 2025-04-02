//TODO: 회원가입 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { Button, Input } from "@/shared/components";

export default function SignUp() {
  return (
    <div className="mx-auto flex justify-center items-center h-screen">
      <Card className="mx-auto py-10 px-10 justify-center items-center">
        <CardHeader className="flex justify-center items-center">
          <img src={logo} alt="logo" className="h-50 w-50"></img>
          <CardTitle className="text-2xl font-bold">회원가입</CardTitle>
        </CardHeader>
        <CardContent className=" w-100 flex flex-col gap-y-2">
          <div className="text-sm font-bold text-left">아이디</div>
          <Input type="text" placeholder="아이디를 입력하세요"></Input>
          <div className="text-sm font-bold text-left">비밀번호</div>
          <Input type="text" placeholder="비밀번호를 입력하세요"></Input>
          <div className="text-sm font-bold text-left">비밀번호 확인</div>
          <Input type="text" placeholder="비밀번호를 입력하세요"></Input>
          <div className="text-sm font-bold text-left">이름</div>
          <Input type="text" placeholder="이름을 입력하세요"></Input>
          <div className="text-sm font-bold text-left">이메일</div>
          <Input type="text" placeholder="이메일을 입력하세요"></Input>
          <div className="text-sm font-bold text-left">학교</div>
          <Input type="text" placeholder="학교를 입력하세요"></Input>
          <div className="text-sm font-bold text-left">전공</div>
          <Input type="text" placeholder="전공을 입력하세요"></Input>
        </CardContent>
        <CardFooter className="justify-center gap-x-4">
          <Button>회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
