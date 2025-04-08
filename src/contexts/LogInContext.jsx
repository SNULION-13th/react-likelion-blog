import { createContext, useState, useContext } from "react";

const DEFAULT_CONTEXT_VALUE = {
  isLogIn: false,
  username: "",
  logIn: () => {},
  logOut: () => {},
};

const LogInContext = createContext(DEFAULT_CONTEXT_VALUE);

const LogInProvider = ({ children }) => {
  const [isLogIn, setLogIn] = useState(false);
  const [username, setUsername] = useState("");

  const logIn = (username) => {
    setLogIn((prev) => !prev);
    setUsername(username);
  };

  const logOut = () => {
    setLogIn((prev) => !prev);
    setUsername("");
  };

  return (
    <LogInContext.Provider value={{ isLogIn, username, logIn, logOut }}>
      {children}
    </LogInContext.Provider>
  );
};

const useLogIn = () => {
  const { isLogIn, username, logIn, logOut } = useContext(LogInContext);
  if (!logIn || !logOut) {
    throw new Error("useLogIn must be used within a LogInProvider");
  }
  return { isLogIn, username, logIn, logOut };
};

export { LogInProvider, useLogIn };
