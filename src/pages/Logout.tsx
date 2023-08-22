import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const LogoutPage: React.FC = () => {
  const history = useHistory();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(countdownInterval);
      // 로그아웃 후 쇼핑몰 메인 페이지로 이동
      history.push("/"); // 메인 페이지 경로로 변경해야 함
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown, history]);

  return (
    <div>
      <p>또 만나요🖐🏻</p>
      <p>{countdown}초 후에 메인 페이지로 이동합니다.</p>
    </div>
  );
};

export default LogoutPage;
