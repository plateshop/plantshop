import { createContext, useContext, ReactNode } from "react";

export interface UserContextProps {
  address: string;
  // 필요한 경우 다른 사용자 정보 추가
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser는 UserProvider 내에서 사용되어야 합니다");
  }
  return context;
};

export default UserContext;