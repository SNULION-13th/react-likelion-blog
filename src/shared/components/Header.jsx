// Example: src/components/Header.jsx
import React, { useContext } from "react";
import lion from "@/assets/lion.jpeg";
import { useMediaQuery } from "@/shared/hooks";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import { UserContext } from "../context";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const { user, setUser } = useContext(UserContext);

  // Handle logout by clearing the user
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="sticky bg-white shadow-accent shadow-lg top-0 left-0 z-50 flex items-center justify-between w-full gap-5 px-5 py-2.5 h-20">
      <Link to="/">
        <div className="flex flex-row items-center gap-5">
          <img src={lion} alt="lion" className="max-h-16 rounded-full" />
          <div className="text-xl">SNULION BLOG</div>
        </div>
      </Link>
      {isMobile ? null : (
        <div className="flex flex-row gap-5">
          {user ? (
            <>
              {/* Optionally display some user info */}
              <span>{user.username}</span>
              <Button onClick={handleLogout}>Log Out</Button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <Button>Sign in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};
