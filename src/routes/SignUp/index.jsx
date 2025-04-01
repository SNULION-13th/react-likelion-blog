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

  <button
    type="submit"
    className="w-full bg-amber-500 text-black py-2 rounded hover:bg-amber-600 transition duration-200"
  >
    회원가입
  </button>
</form>;
