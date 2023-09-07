import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tab from "../components/Tab";
import UserInfoTab from "../components/UserInfoTab";
import OrderHistoryTab from "../components/OrderHistoryTab";
import ChangePasswordTab from "../components/ChangePasswordTab";

const App: React.FC = () => {
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
          <Tab
            label="Order History"
            onClick={() => handleTabClick("order-history")}
          />
          <Tab
            label="Change Password"
            onClick={() => handleTabClick("change-password")}
          />
        </div>
        <div className="tab-content">
          <Switch>
            <Route path="/user-info">
              <UserInfoTab userId={userId} nickname={nickname} />
            </Route>
            <Route path="/order-history">
              <OrderHistoryTab orderHistory={orderHistory} />
            </Route>
            <Route path="/change-password">
              <ChangePasswordTab onChangePassword={handlePasswordChange} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
