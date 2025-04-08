import lion from "@/assets/lion.jpeg";
import { useMediaQuery } from "@/shared/hooks";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "@/shared/context/loginContext";

//TODO: 로그인 했을 시에는 로그아웃 버튼만 나타나게 하기
export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const { isLogin } = useContext(loginContext); // 로그인 여부 상태를 가져옴
  // 로그인 여부 상태, 우선 false로 초기화

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
      {
        isMobile ? null : isLogin ? ( // 로그인 상태일 때
          <div className="flex flex-row gap-5">
            <Link to="/signin">
              <Button>Logout</Button>
            </Link>
          </div>
        ) : (
          // 로그인 상태가 아닐 때
          <div className="flex flex-row gap-5">
            <Link to="/signin">
              <Button>sign in</Button>
            </Link>
            <Link to="/signup">
              <Button>sign up</Button>
            </Link>
          </div>
        )
        //   <div className="flex flex-row gap-5">
        //     <Link to="/signin">
        //       <Button>sign in</Button>
        //     </Link>
        //     <Link to="/signup">
        //       <Button>sign up</Button>
        //     </Link>
        //   </div>
        // )
      }
    </div>
  );
};
