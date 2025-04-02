//TODO: 회원가입 페이지 구현
import { Input } from "@/shared/components";

function SignUpInput({ text, placeholder }) {
  return (
    <div className="flex flex-col justify-center w-full my-1">
      <div className="mx-1 flex justify-start">
        <p className="text-black text-sm font-semibold ">{text}</p>
      </div>
      <Input
        className="text-sm placeholder:text-sm my-1 h-8 focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export { SignUpInput };
