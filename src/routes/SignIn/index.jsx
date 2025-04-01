//TODO: 로그인 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { Button, Input } from "@/shared/components";

export default function SignIn() {
  return (
    <div className="mx-auto flex justify-center items-center h-screen">
      <Card className="mx-auto py-10 px-10 justify-center items-center">
        <CardHeader className="flex flex-col items-center justify-center">
          <img src={logo} alt="logo" className="h-50 w-50"></img>
          <CardTitle className=" text-2xl font-bold">로그인</CardTitle>
        </CardHeader>
        <CardContent className="w-90 justify-center flex flex-col gap-y-3">
          <Input type="text" placeholder="아이디를 입력하세요"></Input>
          <Input type="text" placeholder="비밀번호를 입력하세요"></Input>
        </CardContent>
        <CardFooter className="justify-center gap-x-4">
          <Button children="로그인"></Button>
          <Button children="회원가입"></Button>
        </CardFooter>
      </Card>
    </div>
  );
}
