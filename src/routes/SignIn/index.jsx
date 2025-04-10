import { signIn } from "./api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input, Button } from "@/shared/components";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router";
import { SignInContext } from "@/App"; // SignInContext를 가져온다.
import { useContext } from "react";

export default function Signin() {
  const navigate = useNavigate();

  const { sign, setSign } = useContext(SignInContext); // 전역에서 SignInContext를 가져와서 sign state에 할당.
  // 무조건 이 앞에서만 불러와야지 할 수 있대.

  const handleSignin = async (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    try {
      const user = await signIn(username.value, password.value);
      console.log(user);
      //TODO: 로그인 성공 시, ContextAPI를 이용해서 전역에서 유저 정보 관리하기
      // 이미 로그인 로직은 만들어져 있고, 이게 되었으면 login이 되었다고 state 바꾸면 됨.

      setSign("SignIn"); // SignIn으로 바꿔줌. 이러면 이제 전역에서 이 상태를 관리 가능.
      // 이제 SingIn으로 바뀌었으므로, 홈 화면에서 이를 인식하여 LogOut 버튼만 떠야함.

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
      <form onSubmit={handleSignin}>
        <Card className="w-[400px] aspect-square">
          <img src={logo} className="h-[40%] mx-auto" />
          <CardHeader className="flex items-center !pt-0">
            <CardTitle className="text-2xl font-bold">로그인</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Input
                name="username"
                type="text"
                placeholder="아이디를 입력하세요"
              />
              <Input
                name="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-[4px]">
            <Button type="submit">로그인</Button>
            <Button type="button">회원가입</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
