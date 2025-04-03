import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home"; // 얘는 그냥 하나의 파일로 합치기 위해 불러오는 놈.
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";

function App() {
  return (
    // Home 컴포넌트는 props가 없으므로 그냥 호출하는거. 컴포넌트는 함수 같이 인자를 넣어서 호출할 수 있음.
    // 컴포넌트는 기본적으로 '객체'이기 때문에. props라는 걸 인자로 넣어줄 수 있는 느낌.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
