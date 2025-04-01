import React, { useState } from "react";
import logo from "../../assets/logo.png"; // Adjusted path for the logo

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your sign-up logic here (e.g., API call)
    console.log("Signing up with:", { username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container for centering the sign-up card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
        </div>

        <h2 className="text-center text-2xl font-bold mb-6">회원가입</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-1"
            >
              아이디
            </label>
            <input
              type="text"
              id="username"
              placeholder="아이디를 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>{" "}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              이름
            </label>
            <input
              type="password"
              id="password"
              placeholder="이름을 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>{" "}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              이메일
            </label>
            <input
              type="password"
              id="password"
              placeholder="이메일을 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              학교
            </label>
            <input
              type="password"
              id="password"
              placeholder="학교를 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>{" "}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              전공
            </label>
            <input
              type="password"
              id="password"
              placeholder="전공을 입력하세요"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 text-red py-2 rounded hover:bg-amber-600 transition duration-200"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
