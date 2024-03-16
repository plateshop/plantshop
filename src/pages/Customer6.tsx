import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // 수정: Switch를 가져옴
import Tab from "../components/Tab"; // 수정: 경로를 정확하게 지정
import UserInfoTab from "../components/UserInfoTab";
import OrderHistoryTab from "../components/OrderHistoryTab";
import ChangePasswordTab from "../components/ChangePasswordTab";
// import "./App.css";

// interface TabProps {
//   label: string;
//   onClick: () => void;
// }

function App() {
  const [activeTab, setActiveTab] = useState("user-info");
  const [userId] = useState("user123");
  const [nickname] = useState("John Doe");
  const [orderHistory] = useState(["Order #123", "Order #456"]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handlePasswordChange = () => {
    setActiveTab("user-info");
  };

  return (
    <Router>
      <div className="app">
        <div className="tab-bar">
        <Tab label="User Info" onClick={() => handleTabClick("user-info")} />
        <Tab label="Order History" onClick={() => handleTabClick("order-history")} />
        <Tab label="Change Password" onClick={() => handleTabClick("change-password")} />
        </div>
        <div className="tab-content">
          <Switch> {/* 수정: <Switch> 대신 <Routes> */}
            <Route path="/user-info">
              {/* 수정: UserInfoTab 컴포넌트 수정 */}
              <UserInfoTab userId={userId} nickname={nickname} />
            </Route>
            <Route path="/order-history">
              {/* 수정: OrderHistoryTab 컴포넌트 수정 */}
              <OrderHistoryTab orderHistory={orderHistory} />
            </Route>
            <Route path="/change-password">
              {/* 수정: ChangePasswordTab 컴포넌트 수정 */}
              <ChangePasswordTab onChangePassword={handlePasswordChange} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

