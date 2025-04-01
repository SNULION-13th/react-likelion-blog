//TODO: 회원가입 페이지 구현
import React from "react";
import logoImg from "@/assets/logo.png";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-[500px] bg-white rounded-[15px] shadow-[0_0_6px_rgba(0,0,0,0.25)] p-6">
        <div className="flex justify-center mb-4">
          <img src={logoImg} alt="로고" className="h-12 w-auto" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">회원가입</h2>

        <form>
          <div className="flex justify-start px-7 mb-1 text-[16px] font-bold ">
            아이디
          </div>
          <div className="mb-5 px-6">
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              className="
              w-full
              border border-gray-300
              rounded
              px-3
              py-2
              focus:outline-none
              focus:ring-2 
              focus:ring-amber-400"
            />
          </div>

          <div className="flex justify-start px-7 mb-1 text-[16px] font-bold ">
            비밀번호
          </div>
          <div className="mb-5 px-6">
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="
          w-full
          border border-gray-300
          rounded
          px-3 py-2
          focus:outline-none 
          focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="flex justify-start px-7 mb-1 text-[16px] font-bold ">
            비밀번호 확인
          </div>
          <div className="mb-4 px-6">
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="
                w-full
                border border-gray-300
                rounded
                px-3 py-2
                focus:outline-none 
                focus:ring-2 focus:ring-amber-400
              "
            />
          </div>

          <div className="flex justify-start px-7 mb-1 text-[16px] font-bold ">
            이름
          </div>
          <div className="mb-3 px-6">
            <input
              type="text"
              placeholder="이름을 입력하세요"
              className="
                w-full
                border border-gray-300
                rounded
                px-3 py-2
                focus:outline-none 
                focus:ring-2 focus:ring-amber-400
              "
            />
          </div>

          <div className="flex justify-start px-7 mb-1 text-[16px] font-bold ">
            이메일
          </div>
          <div className="mb-3 px-6">
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              className="
                w-full
                border border-gray-300
                rounded
                px-3 py-2
                focus:outline-none 
                focus:ring-2 focus:ring-amber-400
              "
            />
          </div>

          <div className="flex justify-start px-7 mb-1 text-[16px] font-bold ">
            학교
          </div>
          <div className="mb-3 px-6">
            <input
              type="text"
              placeholder="학교를 입력하세요"
              className="
                w-full
                border border-gray-300
                rounded
                px-3 py-2
                focus:outline-none 
                focus:ring-2 focus:ring-amber-400
              "
            />
          </div>

          <div className="flex justify-start px-7 mb-1 text-[16px] font-bold ">
            전공
          </div>
          <div className="mb-8 px-6 flex items-center">
            <input
              type="text"
              placeholder="전공 입력하세요"
              className="
                flex
                items-center 
                w-full
                border border-gray-300
                rounded
                px-3 py-2
                focus:outline-none 
                focus:ring-2 focus:ring-amber-400
              "
            />
          </div>

          <div className="flex justify-center px-6">
            <button
              type="submit"
              className="
                shadow-lg p-2
                w-full
                text-[#565656]
                !font-bold
                !bg-gray-100
                hover:bg-amber-600
                px-3 py-5
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
