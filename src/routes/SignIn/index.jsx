// ⬇️추가
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

//TODO: 로그인 페이지 구현
import { Link } from "react-router-dom";

// 로그인 페이지에 쓰일 로고 이미지랑 버튼 컴포넌트 임포트트
import Logo from "../../assets/logo.png";
import { Button } from "@/shared/components";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white p-6 rounded-2xl border-2 shadow-lg w-150">
        <div className="flex justify-center">
          <img src={Logo} alt="로고" className="w-70" />
        </div>

        <div className="text-center text-4xl font-semibold mb-10">로그인</div>
        {/* input을 컴포넌트로 써보려고 했는데, className을 지정하니까
        뭔가 엉켜서 테일윈드가 적용이 안되더라고요. 그래서 그냥 input태그로 사용했습니다.*/}
        <input
          type="id"
          placeholder="아이디를 입력하세요"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <div className="flex justify-center">
          <div className="mr-2">
            <Button>로그인</Button>
          </div>
          <Link to="/signup">
            <div className="ml-2">
              <Button>회원가입</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
