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
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Card className="w-[500px]">
        <CardHeader className="flex items-center justify-between">
          <img src={logo} alt="logo" className="max-h-50 max-w-50" />
        </CardHeader>
        <CardTitle className="text-2xl pb-8">로그인</CardTitle>
        <CardContent>
          <div>
            <Input type="text" placeholder="아이디를 입력하세요" />
          </div>
          <div className="pt-2">
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-center gap-5 w-full">
            <Button>로그인</Button>
            <Link to="/signup">
              <Button>회원가입</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
