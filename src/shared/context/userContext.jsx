//TODO: 유저 정보 저장 컨텍스트 구현
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null로 수정!!!!

  const toggleUser = (user) => {
    setUser(user); // user context = {id:number, username:string, password:string}
  };

  return (
    <UserContext.Provider value={{ user: user, toggleUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user, toggleUser } = useContext(UserContext);
  if (!toggleUser) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return { user, toggleUser };
};
