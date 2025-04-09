//TODO: 유저 정보 저장 컨텍스트 구현
import { createContext, useState, useContext } from "react";

const DEFAULT_CONTEXT_VALUE = {
  user: null,
  setUser: () => {},
};

const UserContext = createContext(DEFAULT_CONTEXT_VALUE);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const { user, setUser } = useContext(UserContext);

  return { user, setUser };
};
