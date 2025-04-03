//TODO: 로그인 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

export default function SignIn() {
  //return <div>SignIn</div>;
  /* 
  <card/>
  <ccardheader/>
  와 

  <card><cardheader/></card>의 차이 --> div 안에 감싸지냐의 차이..
  
  + <card>로그인</card>은 이 아래에 '로그인'이라는 글씨가 적용되는 느낌인듯.
  */

  /*return (
    <div>
      <Card>
        <CardHeader>a</CardHeader>
        <CardTitle>b</CardTitle>
        <CardDescription>c</CardDescription>
        <CardContent>d</CardContent>
        <CardFooter>e</CardFooter>
      </Card>
    </div>
  );
  */ // 이걸로 각종 컴포넌트의 스타일을 알아볼 수 있었음.
  // 정렬 안될때는 div 같은 걸로 감싸서 flex 걸어버리기
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Card className="w-100">
        <CardHeader className="items-center w-full h-auto">
          <img
            src="/src/assets/logo.png"
            alt="로고 이미지"
            class="w-40 h-auto"
          />
        </CardHeader>
        <CardTitle>로그인</CardTitle>
        <div className="flex justify-center">
          {" "}
          <Input type="ID" placeholder="아이디를 입력하세요" className="mt-2" />
        </div>
        <div className="flex justify-center pb-5">
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="mt-2"
          />
        </div>
        <div className="pb-11">
          <Button className="text-black font-bold mr-1">로그인</Button>
          <Button className="text-black font-bold">회원가입</Button>
        </div>
      </Card>
    </div>
  );
}
