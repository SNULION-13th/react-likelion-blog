import lion from "@/assets/lion.jpeg";
import { useMediaQuery } from "@/shared/hooks";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  // 로그인 여부 상태, 우선 false로 초기화

  return (
    <div
      className={`sticky bg-white shadow-accent shadow-lg top-0 left-0 z-50 flex items-center justify-between w-full gap-5 px-5 py-2.5 h-20`}
    >
      <Link to="/">
        <div className="flex flex-row items-center gap-5">
          <img src={lion} alt="lion" className="h-12 w-12 rounded-full" />
          <div className="text-xl">SNULION BLOG</div>
        </div>
      </Link>
      {isMobile ? null : (
        <div className="flex gap-4 ml-auto">
          <Link to="/signin">
            <Button>sign in</Button>
          </Link>
          <Link to="/signup">
            <Button>sign up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
