import React, { createContext, ReactNode, useContext } from "react";
import UserContext, { UserContextProps } from "../components/UserContext";

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  // 실제 애플리케이션에서는 여기서 서버에서 사용자 데이터를 가져올 것입니다
  const userData: UserContextProps = {
    address: "서울시 강남구",
    // 필요한 경우 다른 사용자 정보 추가
  };

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { useUser };
export default UserProvider;
