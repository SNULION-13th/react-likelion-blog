import { createContext, useState, useEffect, useMemo } from "react";
import { getUserById } from "@/shared/api";

export const UserContext = createContext({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      const fetchUser = async () => {
        try {
          const userData = await getUserById(parseInt(storedUserId, 10));
          setUser(userData);
          console.log("User loaded from localStorage:", userData);
        } catch (error) {
          console.error("Failed to fetch user from stored ID:", error);
          localStorage.removeItem("userId");
        } finally {
          setIsLoading(false);
        }
      };
      fetchUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("userId", userData.id.toString());
    console.log("User logged in:", userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userId");
    console.log("User logged out");
  };

  const isLoggedIn = !!user;

  const value = useMemo(
    () => ({ user, isLoggedIn, login, logout }),
    [user, isLoggedIn]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
