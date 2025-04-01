import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Header, Input, Button } from "@/shared/components";
import logoSrc from "@/assets/logo.png";

export default function SignIn() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50 p-4">
        <Card className="w-full max-w-lg min-h-auto">
          <CardHeader className="items-center text-center">
            <img
              src={logoSrc}
              alt="로고"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <CardTitle className="text-2xl">로그인</CardTitle>
          </CardHeader>
          <form>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Input
                  id="email"
                  type="email"
                  placeholder="아이디를 입력하세요"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              {/* Button에 hover가 있는데 왜 추가해야만 동작하는지는 모르겠어요*/}
              <Button
                type="button"
                className="w-full text-gray-700 mx-1 hover:!bg-amber-400 hover:text-white"
              >
                로그인
              </Button>
              <Button
                type="button"
                className="w-full text-gray-700 mx-1 hover:!bg-amber-400 hover:text-white"
              >
                회원가입
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
