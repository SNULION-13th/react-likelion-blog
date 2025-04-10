import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from "./routes/Home";
import { Header } from "@/shared/components";
import Signin from "./routes/SignIn";
import Signup from "./routes/SignUp";
import { createContext, useState } from "react";
// 목표 : createContext를 이용해서 전역 변수 만들고, signIn 상태와 상태 변화 함수를 만들어서 자식으로 넘기기.

const SignInContext = createContext("LogOut"); // LogOut / SignIn 2개로 state를 구성.
const WritingContext = createContext(false); // 글쓰기 모드인지 아닌지에 대한 상태를 관리하기 위한 context.
// 아래 App에서 감싸려고

// import PostPage from "./routes/Post";
function AppContent() {
  const location = useLocation();

  const HIDE_HEADER_PATHS = ["/signin", "/signup"];

  const shouldShowHeader = !HIDE_HEADER_PATHS.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/post/:postId" element={<PostPage />} /> */}
      </Routes>
    </>
  );
}

function App() {
  // 아래로 전달할 상태 정의
  const [sign, setSign] = useState("LogOut"); // LogOut / SignIn 2개로 state를 구성.
  const [writing, setWriting] = useState(false); // 글쓰기 모드인지 아닌지에 대한 상태를 관리하기 위한 context.

  return (
    <SignInContext.Provider
      value={
        {
          sign,
          setSign,
        } /* 상태, 상태 변화 함수 모두 전달. 이러면 이제 아래 (Signin 등)에서 이용할 수 있음*/
      }
    >
      <WritingContext.Provider value={{ writing, setWriting }}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </WritingContext.Provider>
    </SignInContext.Provider>
  );
}

export default App;
export { SignInContext, WritingContext }; // SignInContext를 export 해줌. 이래야만 다른 곳에서도 import를 할 수 있음.
