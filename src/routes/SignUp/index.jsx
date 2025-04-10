import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input, Label, Button } from "@/shared/components";
import logo from "@/assets/logo.png";
import { SignUpDialog } from "./components";
import { useState } from "react";

export const SignUpInputLabelContainer = ({ label, input }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-medium pl-2">{label}</div>
      {input}
    </div>
  );
};

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !passwordCheck || !name || !email) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const result = await signUp({
        username,
        password,
        name,
        email,
        university,
        major,
      });

      console.log("회원가입 성공:", result);
      alert("회원가입이 완료되었습니다!");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className="flex items-center justify-center  py-5">
      <Card className="w-[400px] aspect-square">
        <img src={logo} className="h-[40%] mx-auto" />
        <CardHeader className="flex items-center !pt-0">
          <CardTitle className="text-2xl font-bold">회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <SignUpInputLabelContainer
              label={<Label htmlFor="id">아이디</Label>}
              input={
                <Input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              }
            ></SignUpInputLabelContainer>
            <SignUpInputLabelContainer
              label={<Label htmlFor="password">비밀번호</Label>}
              input={
                <Input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              }
            ></SignUpInputLabelContainer>
            <SignUpInputLabelContainer
              label={<Label htmlFor="passwordCheck">비밀번호 확인</Label>}
              input={
                <Input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  id="passwordCheck"
                  name="passwordCheck"
                  value={passwordCheck}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                />
              }
            ></SignUpInputLabelContainer>
            <SignUpInputLabelContainer
              label={<Label htmlFor="name">이름</Label>}
              input={
                <Input
                  type="text"
                  placeholder="이름을 입력하세요"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              }
            ></SignUpInputLabelContainer>

            <SignUpInputLabelContainer
              label={<Label htmlFor="email">이메일</Label>}
              input={
                <Input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              }
            ></SignUpInputLabelContainer>
            <SignUpInputLabelContainer
              label={<Label htmlFor="university">학교</Label>}
              input={
                <Input
                  type="text"
                  placeholder="학교를 입력하세요"
                  id="university"
                  name="university"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              }
            ></SignUpInputLabelContainer>
            <SignUpInputLabelContainer
              label={<Label htmlFor="major">전공</Label>}
              input={
                <Input
                  type="text"
                  placeholder="전공 입력하세요"
                  id="major"
                  name="major"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              }
            ></SignUpInputLabelContainer>

            <SignUpDialog
              triggerButton={<Button type="submit">회원가입</Button>}
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
