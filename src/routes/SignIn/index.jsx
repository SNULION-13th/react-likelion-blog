//TODO: 로그인 페이지 구현
// ⬇️추가
import React from "react";
import logoImg from "@/assets/logo.png";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[500px] bg-white rounded-[15px] shadow-[0_0_6px_rgba(0,0,0,0.25)] p-2">
        <div className="flex justify-center mb-0">
          <img src={logoImg} alt="로고" className="h-50 w-auto" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">로그인</h2>

        <form>
          <div className="mb-4 px-6">
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              className="
                w-full
                border border-gray-300
                rounded
                font-bold
                px-3 py-2
                focus:outline-none 
                focus:ring-2 focus:ring-amber-400
              "
            />
          </div>

          <div className="mb-6 px-6">
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="
                font-bold
                w-full
                border border-gray-300
                rounded
                px-3 py-2
                focus:outline-none
                focus:ring-2 focus:ring-amber-400
              "
            />
          </div>

          <div className="flex justify-center space-x-4 text-lg font-bold pt-2 pb-8">
            <button
              type="submit"
              style={{ backgroundColor: "#efefef", fontWeight: 700 }}
              className="
                shadow-lg p-2
                text-gray-700
                hover:!bg-amber-500
                hover:!text-white
                px-4 py-2
                rounded
              "
            >
              로그인
            </button>

            <button
              type="button"
              style={{ backgroundColor: "#efefef", fontWeight: 700 }}
              className="
                shadow-lg p-2
                text-gray-700
                hover:!bg-amber-500
                hover:!text-white
                font-bold
                px-4 py-2
                rounded
              "
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
