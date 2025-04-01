import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { Input } from "@/shared/components/Input"
import { Button } from "@/shared/components/Button"
export default function SignIn() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[450px] h-[450px] rounded-xl shadow-md">
        <CardHeader className="flex flex-col items-center justify-center p-3">
          <img src={logo} className="h-40 w-40 " alt="Logo" />
          <p className="text-2xl font-semibold text-gray-800" >로그인</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 p-6">
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-2">
          <Button >
            로그인
          </Button>
          <Link to="/signup">
            <Button>
              회원가입
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

