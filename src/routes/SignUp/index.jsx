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
import { Label } from "@/components/ui/label";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Card className="w-[500px] ">
        <CardHeader className="flex items-center justify-between">
          <img src={logo} alt="logo" className="max-h-50 max-w-50 " />
        </CardHeader>
        <CardTitle className="text-2xl pb-8">회원가입</CardTitle>
        <CardContent className="flex-col">
          <form className="grid w-full items-center gap-5">
            <div className="flex flex-col space-y-1.5">
              <Label>아이디</Label>
              <Input type="text" placeholder="아이디를 입력하세요" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>비밀번호</Label>
              <Input type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>비밀번호 확인</Label>
              <Input type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>이름</Label>
              <Input type="text" placeholder="이름을 입력하세요" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>이메일</Label>
              <Input type="text" placeholder="이메일을 입력하세요" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>학교</Label>
              <Input type="text" placeholder="학교를 입력하세요" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>전공</Label>
              <Input type="text" placeholder="전공을 입력하세요" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-5 w-full">
            <Button className="w-full">회원가입</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
