// AuthContext.tsx

import React, { useContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  userName: string;
  onLogin: () => void;
  onLogout: () => void;
};

const AuthContext = React.createContext<AuthContextType>({
  isLoggedIn: false,
  userName: "",
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

  const onLogin = () => {
    setIsLoggedIn(true);
    setUserName("John Doe"); // 로그인하면 사용자 이름 설정
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

