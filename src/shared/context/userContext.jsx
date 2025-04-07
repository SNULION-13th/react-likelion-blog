//TODO: 유저 정보 저장 컨텍스트 구현
import { createContext, useContext, useState } from "react";
const userContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => {
    setUser(userData);
  };

  return (
    <userContext.Provider value={{ user, login }}>
      {children}
    </userContext.Provider>
  );
};
export const useUser = () => useContext(userContext);
