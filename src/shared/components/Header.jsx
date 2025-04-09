import { useContext } from "react";
import lion from "@/assets/lion.jpeg";
import { useMediaQuery } from "@/shared/hooks";
import { Button } from "@/shared/components";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "@/shared/context";

//TODO: 로그인 했을 시에는 로그아웃 버튼만 나타나게 하기
export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  // 로그인 여부 상태, 우선 false로 초기화
  const { user, isLoggedIn, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
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
          {isLoggedIn ? (
            <Button onClick={handleLogout}>LOG OUT</Button>
          ) : (
            <>
              <Link to="/signin">
                <Button>SIGN IN</Button>
              </Link>
              <Link to="/signup">
                <Button>SIGN UP</Button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};
