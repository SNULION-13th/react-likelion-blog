//TODO: 회원가입 페이지 구현
import Logo from "../../assets/logo.png";
import { Button } from "@/shared/components";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white p-6 rounded-2xl border-2 shadow-lg w-120">
        <div className="flex justify-center">
          <img src={Logo} alt="로고" className="w-50" />
        </div>

        <div className="text-center text-4xl font-semibold mb-10">회원가입</div>

        {/* Signin과 마찬가지로 그냥 input컴포넌트를 쓰면 훨씬 코드가 간결해지긴 했을 것 같은데,
        스타일을 살짝 수정하고 싶어서 input태그로 사용했습니다.*/}
        {/*차라리 이걸로 컴포넌트를 하나 더 만들걸 그랬나 싶기도 하네요.*/}
        <label
          htmlFor="id"
          className="block text-left ml-2 mb-1 text-md font-semibold"
        >
          아이디
        </label>
        <input
          id="id"
          type="text"
          placeholder="아이디를 입력하세요"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <label
          htmlFor="password"
          className="block text-left ml-2 mb-1 text-md font-semibold"
        >
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <label
          htmlFor="password-confirm"
          className="block text-left ml-2 mb-1 text-md font-semibold"
        >
          비밀번호 확인
        </label>
        <input
          id="password-confirm"
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <label
          htmlFor="name"
          className="block text-left ml-2 mb-1 text-md font-semibold"
        >
          이름
        </label>
        <input
          id="name"
          type="text"
          placeholder="이름을 입력하세요"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
        <label
          htmlFor="email"
          className="block text-left ml-2 mb-1 text-md font-semibold"
        >
          이메일
        </label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력하세요"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <label
          htmlFor="school"
          className="block text-left ml-2 mb-1 text-md font-semibold"
        >
          학교
        </label>
        <input
          id="school"
          type="text"
          placeholder="학교를 입력하세요"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <label
          htmlFor="major"
          className="block text-left ml-2 mb-1 text-md font-semibold"
        >
          전공
        </label>
        <input
          id="major"
          type="text"
          placeholder="전공을 입력하세요"
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        <Button className="w-full mt-4 p-3 uppercase text-lg bg-stone-200 text-black hover:!bg-amber-400 hover:text-white">
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
