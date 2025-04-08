import { createContext, useState } from "react";

export const loginContext = createContext(null);
export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null); // 로그인한 사용자 정보 상태 추가
  return (
    <loginContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {children}
    </loginContext.Provider>
  );
};
