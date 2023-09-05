import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ImagePage from "../components/ImagePage"; // ImagePage 컴포넌트를 가져옵니다.
import App from "../App"; // 다른 페이지 컴포넌트를 가져옵니다.

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ImagePage} />
        <Route path="/App" component={App} />
      </Switch>
    </Router>
  );
};

export default Main;
