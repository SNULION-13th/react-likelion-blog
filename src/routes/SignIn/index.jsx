import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
//TODO: 로그인 페이지 구현
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { Input } from "@/shared/components";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="h-full flex justify-center items-center">
      <Card className={"w-100 flex flex-col justify-start items-center"}>
        <div className={"flex flex-col items-center"}>
          <img src={logo} alt="logo" className="h-40 w-40" />
          <CardTitle className={"flex justify-center text-2xl font-bold"}>
            로그인
          </CardTitle>
        </div>
        <br />
        <CardContent
          className={"flex flex-col justify-center items-center w-100"}
        >
          <Input
            className="my-1 focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
            type="text"
            placeholder="아이디를 입력하세요"
          />
          <Input
            className="my-1 focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </CardContent>
        <CardFooter>
          <Link to="/">
            <Button className={"text-black mx-1.5"}>로그인</Button>
          </Link>
          <Link to="/signup">
            <Button className={"text-black mx-1.5"}>회원가입</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
