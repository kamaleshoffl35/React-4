import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const login = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
