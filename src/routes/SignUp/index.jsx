//TODO: 회원가입 페이지 구현
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { SignUpInput } from "@/components/ui/SignUpInput";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="h-full flex justify-center items-center">
      <Card className={"w-100 flex flex-col justify-start items-center"}>
        <div className={"flex flex-col items-center"}>
          <img src={logo} alt="logo" className="h-40 w-40" />
          <CardTitle className={"flex justify-center text-2xl font-bold"}>
            회원가입
          </CardTitle>
        </div>
        <br />
        <CardContent
          className={"flex flex-col justify-center items-center w-100 !pb-3"}
        >
          <SignUpInput text={"아이디"} placeholder={"아이디를 입력하세요"} />
          <SignUpInput
            text={"비밀번호"}
            placeholder={"비밀번호를 입력하세요"}
          />
          <SignUpInput
            text={"비밀번호 확인"}
            placeholder={"비밀번호를 다시 입력하세요"}
          />
          <SignUpInput text={"이름"} placeholder={"이름을 입력하세요"} />
          <SignUpInput text={"이메일"} placeholder={"이메일을 입력하세요"} />
          <SignUpInput text={"학교"} placeholder={"학교를 입력하세요"} />
          <SignUpInput text={"전공"} placeholder={"전공을 입력하세요"} />
        </CardContent>
        <CardFooter>
          <Link to="/signin">
            <Button className={"text-black w-90"}>회원가입</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
