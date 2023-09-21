import React, { useState } from "react";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // 여기에 로그인 로직을 추가하세요. 예를 들어, 사용자 이름과 비밀번호를 확인하고 로그인 상태를 관리할 수 있습니다.
    // 이 예제에서는 단순히 로그인 버튼을 클릭하면 메인 페이지로 이동하도록 설정합니다.
    onLogin();
  };

  return (
    <div className="container">
      <div className="form-group">
        <label>아이디:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>비밀번호:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
};

export default LoginPage;
