//TODO: 회원가입 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
export default function SignUp() {
  return (
    <>
      <Card className={"w-[400px] mx-auto mt-20"}>
        <CardHeader className={"card-header"}>
          <img
            className="w-40 h-40 mx-auto "
            src="src/assets/logo.png"
            alt="logo"
          />
          <CardTitle className="text-center text-3xl font-bold">
            회원가입
          </CardTitle>
        </CardHeader>
        <CardContent className={"card-content"}>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-left">회원가입</p>
            <Input placeholder="아이디" type="text" />
            <p className="font-bold text-left">비밀번호</p>
            <Input placeholder="비밀번호" type="password" />
            <p className="font-bold text-left">비밀번호 확인</p>
            <Input placeholder="비밀번호 확인" type="password" />
            <p className="font-bold text-left">이름</p>
            <Input placeholder="이름" type="text" />
            <p className="font-bold text-left">이메일</p>
            <Input placeholder="이메일" type="email" />
            <p className="font-bold text-left">학교</p>
            <Input placeholder="학교" type="text" />
            <p className="font-bold text-left">전공</p>
            <Input placeholder="전공" type="text" />
          </div>
          <div className="flex justify-center mt-5">
            <Button className="w-full">회원가입</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
