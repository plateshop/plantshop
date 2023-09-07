import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
// import { Navbar } from "./components/Navbar";
import Cart from "./pages/Cart";
// import Customer from "./pages/Customer";
// import Favorite from "./pages/Favorite";
// import Search from "./pages/Search";
import Cup from "./pages/Cup";
import Payment from "./pages/Payment";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Main from "./pages/main";
import Customer6 from "./pages/Customer6";
import Pngword from "./pages/Pngword";
import Basket from "./pages/Basket";
import Bowls from "./pages/Bowls";
import Plates from "./pages/Plates";
import Kitchenware from "./pages/Kitchenware";
import Image from "./components/ImagePage";

function App() {
  return (
    <div className="App">
      <div className="main-bg">
        {/* <Main title="Main Title" sub="Sub Title" /> */}
      </div>
      <Router>
        <Switch>
          <Route path="/" exact component={Image} />
          {/* <Route path="/customer" element={<Customer />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search" element={<Search />} /> */}
          <Route path="/cart" component={Cart} />
          <Route path="/cup" component={Cup} />
          <Route path="/payment" component={Payment} />
          <Route path="/products" component={Products} />
          <Route path="/detail" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/Customer6" component={Customer6} />
          <Route path="/Basket" component={Basket} />
          <Route path="/Pngword" component={Pngword} />
          <Route path="/Bowls" component={Bowls} />
          <Route path="/Plates" component={Plates} />
          <Route path="/Kitchenware" component={Kitchenware} />
          <Route path="/img" component={Image} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
