//TODO: 회원가입 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { Input } from "@/shared/components";
import { Button } from "@/components/ui/button";
export default function SignUp() {
  return( 
    <>
    <div className="flex justify-center items-center py-14 w-screen h-screen">
    <Card className="flex flex-col items-center justify-center text-center gap-4 max-w-md">
      <CardHeader>
        <img src={logo} alt="logo" className="w-[40%] rounded-full mx-auto"  />
        <p className="text-lg font-bold">로그인</p>
      </CardHeader>
      <CardContent className="w-full  flex flex-col gap-1">
        <p className="font-bold items-start text-left ml-1 ">아이디</p>
        <Input type="text" className="text-sm w-full mb-4" placeholder="아이디를 입력하세요" />
        <p className="font-bold items-start text-left ml-1">비밀번호</p>
        <Input className="text-sm mb-4" type="password" placeholder="비밀번호를 입력하세요" />
        <p className="font-bold items-start text-left ml-1">비밀번호 확인</p>
        <Input className="text-sm mb-4" type="password" placeholder="비밀번호를 입력하세요" />
        <p className="font-bold items-start text-left ml-1">이름</p>
        <Input type="text" className="text-sm mb-4" placeholder="이름을 입력하세요" />
        <p className="font-bold items-start text-left ml-1">이메일</p>
        <Input type="text" className="text-sm mb-4"  placeholder="이메일을 입력하세요" />
        <p className="font-bold items-start text-left ml-1">학교</p>
        <Input type="text" className="text-sm mb-4"  placeholder="학교를 입력하세요" />
        <p className="font-bold items-start text-left ml-1">전공</p>
        <Input type="text" className="text-sm mb-4"  placeholder="전공을 입력하세요" />
      
      
      </CardContent>
      <CardFooter className="flex justify-between gap-4">

      <Button variant="custom" className="w-full text-sm">
        회원가입
      </Button>
      </CardFooter>
    </Card>
    </div>
    </>
  )
}
