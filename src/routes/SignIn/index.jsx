import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Input, Button } from "@/shared/components";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[400px] rounded-lg">
        <CardHeader>
          <img
            src=".\src\assets\logo.png"
            alt="Logo"
            className="w-40 mx-auto mb-4 rounded-full"
          />
          <CardTitle className="text-center text-xl">로그인</CardTitle>
        </CardHeader>
        <form>
          <CardContent className="flex flex-col gap-4">
            <Input type="text" placeholder="아이디" />
            <Input type="password" placeholder="비밀번호" />
          </CardContent>
          <CardFooter className="flex justify-center p-6 pt-0">
            <div className="flex justify-center gap-4 mt-4">
              <Button type="submit">로그인</Button>
              <Link to="/signup" className="btn-signup">
                <Button>회원가입</Button>
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
