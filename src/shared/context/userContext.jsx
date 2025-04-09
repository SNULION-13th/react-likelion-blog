//TODO: 유저 정보 저장 컨텍스트 구현
import { createContext, useContext, useState } from "react";

// 1. context 만들기
const UserContext = createContext();

// 2. Provider 컴포넌트 만들기
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 로그인된 유저 정보 (초기값: null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. 훅으로 간편하게 사용
export const useUser = () => useContext(UserContext);
