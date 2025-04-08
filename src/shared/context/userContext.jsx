//TODO: 유저 정보 저장 컨텍스트 구현
import { createContext, useContext, useState } from "react";

const UserContextDefault = {
  user: null,
  setUser: () => {},
};

const UserContext = createContext(UserContextDefault);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(UserContextDefault.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
};

export { UserProvider, useUser, UserContext };
