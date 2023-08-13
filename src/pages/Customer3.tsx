import React from "react";

interface UserInfoTabProps {
  userId: string;
  nickname: string;
}

const UserInfoTab: React.FC<UserInfoTabProps> = ({ userId, nickname }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>User ID: {userId}</p>
      <p>Nickname: {nickname}</p>
    </div>
  );
};

export default UserInfoTab;
