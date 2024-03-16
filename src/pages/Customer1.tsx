import React, { useState } from "react";
import axios from "axios";

interface User {
  id: number;
  username: string;
  nickname: string;
}

const UserPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [nickname, setNickname] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/user"); // Replace with actual API endpoint
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const updateNickname = async () => {
    try {
      await axios.put("/api/user/nickname", { nickname }); // Replace with actual API endpoint
      setMessage("Nickname updated successfully!");
    } catch (error) {
      console.error("Error updating nickname:", error);
      setMessage("Failed to update nickname");
    }
  };

  const changePassword = async () => {
    try {
      await axios.put("/api/user/password", { newPassword }); // Replace with actual API endpoint
      setMessage("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password:", error);
      setMessage("Failed to change password");
    }
  };

  return (
    <div>
      <h1>User Page</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Nickname: {user.nickname}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}

      <h2>Update Nickname</h2>
      <input type="text" value={nickname} onChange={handleNicknameChange} />
      <button onClick={updateNickname}>Update Nickname</button>

      <h2>Change Password</h2>
      <input
        type="password"
        value={newPassword}
        onChange={handlePasswordChange}
      />
      <button onClick={changePassword}>Change Password</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default UserPage;
