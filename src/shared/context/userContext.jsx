//TODO: 유저 정보 저장 컨텍스트 구현
import { createContext, useState, useContext } from "react";

const DEFAULT_CONTEXT_VALUE = {
  user: null,
  setUser: () => {},
};

const UserContext = createContext(DEFAULT_CONTEXT_VALUE);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_CONTEXT_VALUE.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  if (!setUser) {
    throw new Error("useIsLogIn must be used within a IsLogInProvider");
  }
  return { user, setUser };
};
