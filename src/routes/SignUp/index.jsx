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

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <Card className="w-[400px] p-6 shadow-lg">
        <CardHeader className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-30 h-30" />
          <CardTitle className="text-center text-xl mt-4">회원가입</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-start text-gray-700 mb-1">
              아이디
            </label>
            <Input type="text" placeholder="아이디를 입력하세요" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-start text-gray-700 mb-1">
              비밀번호
            </label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-start text-gray-700 mb-1">
              비밀번호 확인
            </label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-start text-gray-700 mb-1">
              이름
            </label>
            <Input type="text" placeholder="이름을 입력하세요" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-start text-gray-700 mb-1">
              이메일
            </label>
            <Input type="text" placeholder="이메일을 입력하세요" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-start text-gray-700 mb-1">
              학교
            </label>
            <Input type="text" placeholder="학교를 입력하세요" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-start text-gray-700 mb-1">
              전공
            </label>
            <Input type="text" placeholder="전공을 입력하세요" />
          </div>
        </CardContent>

        <CardFooter className="flex justify-center gap-4 mt-2">
          <Button>회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
