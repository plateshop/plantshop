import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Navbar } from "./components/navbar";
import Cart from "./pages/Cart";
// import Customer from "./pages/Customer";
// import Favorite from "./pages/Favorite";
// import Search from "./pages/Search";
import Cup from './pages/Cup';
import Payment from './pages/Payment';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <div className="main-bg">
        <Navbar />
      </div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <div>Home Page Content</div>} />
          {/* <Route path="/customer" element={<Customer />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search" element={<Search />} /> */} 
          <Route path="/cart" component={Cart} />
          <Route path="/cup" component={Cup} />
          <Route path="/payment" component={Payment} />
          <Route path="/products" component={Products} />
          <Route path="/detail" component={Detail} />
          <Route path="/login" component={Login} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;








