import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/shared/components";
import logo from "@/assets/logo.png";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#fbe9dd] flex items-center justify-center">
      <Card className="w-[400px] shadow-md">
        <CardHeader className="flex flex-col items-center justify-center">
          <img src={logo} alt="logo" className="h-30 mb-2" />
          <CardTitle className="text-xl text-center">회원가입</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-left">
          {/* 아이디 */}
          <div className="space-y-1">
            <label className="text-sm font-bold">아이디</label>
            <Input placeholder="아이디를 입력하세요" />
          </div>

          {/* 비밀번호 */}
          <div className="space-y-1">
            <label className="text-sm font-bold">비밀번호</label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>

          {/* 비밀번호 확인 */}
          <div className="space-y-1">
            <label className="text-sm font-bold">비밀번호 확인</label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>

          {/* 이름 */}
          <div className="space-y-1">
            <label className="text-sm font-bold">이름</label>
            <Input placeholder="이름을 입력하세요" />
          </div>

          {/* 이메일 */}
          <div className="space-y-1">
            <label className="text-sm font-bold">이메일</label>
            <Input placeholder="이메일을 입력하세요" />
          </div>

          {/* 학교 */}
          <div className="space-y-1">
            <label className="text-sm font-bold">학교</label>
            <Input placeholder="학교를 입력하세요" />
          </div>

          {/* 전공 */}
          <div className="space-y-1">
            <label className="text-sm font-bold">전공</label>
            <Input placeholder="전공을 입력하세요" />
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          {/*className 설정하지 않기!*/}
          <Button>회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
