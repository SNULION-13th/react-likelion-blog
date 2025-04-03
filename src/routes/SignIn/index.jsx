// ⬇️추가
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";

export default function SignIn() {
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
            로그인
          </CardTitle>
        </CardHeader>
        <CardContent className={"card-content"}>
          <div className="flex flex-col gap-4">
            <Input placeholder="아이디" type="text" />
            <Input placeholder="비밀번호" type="password" />
          </div>
          <div className="flex justify-center mt-5">
            <Button>로그인</Button>
            <Button>회원가입</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
