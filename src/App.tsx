import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ImagePage from "./components/ImagePage"; // ImagePage 컴포넌트를 가져옵니다.
import main from "./pages/main"; // 다른 페이지 컴포넌트를 가져옵니다.

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ImagePage} />
        <Route path="/main" component={main} />
      </Switch>
    </Router>
  );
};

export default App;
