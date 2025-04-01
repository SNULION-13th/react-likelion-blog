import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input, Button } from "@/shared/components";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <Card className="w-[400px] p-4 shadow-lg">
        <CardHeader className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-40 h-40" />
          <CardTitle className="text-center text-xl mt-4">로그인</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Input type="text" placeholder="아이디를 입력하세요" />
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </CardContent>

        <CardFooter className="flex justify-center gap-4 mt-2">
          <Button>로그인</Button>
          <Button variant="secondary" onClick={() => navigate("/signup")}>
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
