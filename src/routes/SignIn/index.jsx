//TODO: 로그인 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { Input } from "@/shared/components";
import { Button } from "@/shared/components";
export default function SignIn() {
  return( 
    <>
    <div className="flex justify-center items-center py-14 w-screen h-screen">
    <Card className="flex flex-col items-center justify-center text-center gap-4 max-w-md">
      <CardHeader>
        <img src={logo} alt="logo" className="w-[40%] rounded-full mx-auto"  />
        <p className="text-lg font-bold">로그인</p>
      </CardHeader>
      <CardContent className="w-full  flex flex-col gap-4">
        <Input className="text-sm w-full" placeholder="아이디를 입력하세요" />
        <Input className="text-sm" type="password" placeholder="비밀번호를 입력하세요" />
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button>로그인</Button>
        <Button>회원가입</Button>

      </CardFooter>
    </Card>
    </div>
    </>
  )
}
