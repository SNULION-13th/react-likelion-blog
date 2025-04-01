//TODO: 회원가입 페이지 구현
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Header, Input, Button } from "@/shared/components";
import logoSrc from "@/assets/logo.png";

export default function SignUp() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50 p-4">
        <Card className="w-full max-w-lg">
          <CardHeader className="items-center text-center">
            <img
              src={logoSrc}
              alt="로고"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <CardTitle className="text-2xl">회원가입</CardTitle>
          </CardHeader>

          <form>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <CardDescription className="pl-2 text-left text-sm text-gray-600 font-semibold">
                  아이디
                </CardDescription>
                <Input
                  id="userid"
                  type="text"
                  placeholder="아이디를 입력하세요"
                  required
                />
              </div>
              <div className="space-y-1">
                <CardDescription className="pl-2 text-left text-sm text-gray-600 font-semibold">
                  비밀번호
                </CardDescription>
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>
              <div className="space-y-1">
                <CardDescription className="pl-2 text-left text-sm text-gray-600 font-semibold">
                  비밀번호 확인
                </CardDescription>
                <Input
                  id="passwordConfirm"
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                  required
                />
              </div>
              <div className="space-y-1">
                <CardDescription className="pl-2 text-left text-sm text-gray-600 font-semibold">
                  이름
                </CardDescription>
                <Input
                  id="name"
                  type="text"
                  placeholder="이름을 입력하세요"
                  required
                />
              </div>
              <div className="space-y-1">
                <CardDescription className="pl-2 text-left text-sm text-gray-600 font-semibold">
                  이메일
                </CardDescription>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  required
                />
              </div>
              <div className="space-y-1">
                <CardDescription className="pl-2 text-left text-sm text-gray-600 font-semibold">
                  학교
                </CardDescription>
                <Input
                  id="school"
                  type="text"
                  placeholder="학교를 입력하세요"
                />
              </div>
              <div className="space-y-1">
                <CardDescription className="pl-2 text-left text-sm text-gray-600 font-semibold">
                  전공
                </CardDescription>
                <Input id="major" type="text" placeholder="전공을 입력하세요" />
              </div>
            </CardContent>

            <CardFooter>
              {/* Button에 hover가 있는데 왜 추가해야만 동작하는지는 모르겠어요*/}
              <Button
                type="button"
                className="w-full text-gray-700 hover:!bg-amber-400 hover:text-white"
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
