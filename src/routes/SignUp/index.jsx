import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input, Button } from "@/shared/components";

export default function SignUp() {
  return (
    <div className="flex items-start justify-center min-h-screen">
      <Card className="w-[400px] h-[850px]">
        <CardHeader>
          <img
            src=".\src\assets\logo.png"
            alt="Logo"
            className="w-30 mx-auto mb-4"
          />
          <CardTitle className="text-center text-xl">회원가입</CardTitle>
        </CardHeader>
        <form>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1 text-left">
                아이디
              </label>
              <Input id="username" type="text" placeholder="아이디" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-left">
                비밀번호
              </label>
              <Input id="password" type="password" placeholder="비밀번호" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="mb-1 text-left">
                비밀번호 확인
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="비밀번호 확인"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-left">
                이름
              </label>
              <Input id="name" type="text" placeholder="이름" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-left">
                이메일
              </label>
              <Input id="email" type="text" placeholder="이메일" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="school" className="mb-1 text-left">
                학교
              </label>
              <Input id="school" type="text" placeholder="학교" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="major" className="mb-1 text-left">
                전공
              </label>
              <Input id="major" type="text" placeholder="전공" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <button type="submit" className="block w-full">
                회원가입
              </button>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
