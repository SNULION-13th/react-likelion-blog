import lion from "@/assets/lion.jpeg";
import { useMediaQuery } from "@/shared/hooks";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import { SignInContext } from "@/App"; // SignInContext를 가져온다.
import { useContext } from "react";

//TODO: 로그인 했을 시에는 로그아웃 버튼만 나타나게 하기
export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  // 로그인 여부 상태, 우선 false로 초기화

  const { sign, setSign } = useContext(SignInContext); // 전역 변수 가져오기

  const handleLogout = () => {
    setSign("LogOut");
  };

  return (
    <div
      className={`sticky bg-white shadow-accent shadow-lg top-0 left-0 z-50 flex items-center justify-between w-full gap-5 px-5 py-2.5 h-20`}
    >
      <Link to="/">
        <div className="flex flex-row items-center gap-5">
          <img src={lion} alt="lion" className="max-h-16 rounded-full" />
          <div className="text-xl">SNULION BLOG</div>
        </div>
      </Link>
      {isMobile ? null : (
        <div className="flex flex-row gap-5">
          <Link to="/signin">
            {sign === "LogOut" && <Button>sign in</Button>}
          </Link>
          <Link to="/signup">
            {sign === "LogOut" && <Button>sign up</Button>}
          </Link>
          <Link to="/">
            {sign === "SignIn" && (
              <Button
                onClick={
                  handleLogout /*누르면 setSign, 콜백형태로 전달해야함.*/
                }
              >
                LOGOUT
              </Button>
            )}
          </Link>
        </div>
      )}
    </div>
  );
};
