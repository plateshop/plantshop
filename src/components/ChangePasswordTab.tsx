import React, { useState } from "react";
import axios from "axios";

interface ChangePasswordTabProps {
  onChangePassword: () => void;
}

const ChangePasswordTab: React.FC<ChangePasswordTabProps> = ({
  onChangePassword,
}) => {
  const [newPassword, setNewPassword] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const changePassword = async () => {
    try {
      await axios.put("/api/user/password", { newPassword }); // Replace with actual API endpoint
      onChangePassword();
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <input
        type="password"
        value={newPassword}
        onChange={handlePasswordChange}
      />
      <button onClick={changePassword}>Change Password</button>
    </div>
  );
};

export default ChangePasswordTab;
