//TODO: 유저 정보 저장 컨텍스트 구현
import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <userContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export const useAuthMode = () => {
  return useContext(userContext);
};
