import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
// import { Navbar } from "./components/Navbar";
import Cart from "./pages/Cart";
// import Customer from "./pages/Customer";
// import Favorite from "./pages/Favorite";
// import Search from "./pages/Search";
import Cup from './pages/Cup';
import Payment from './pages/Payment';
import Products from './pages/Products';
import Login from './pages/Login';
import  Main  from './pages/Main.tsx';
import Customer6 from './pages/Customer6';
import Pngword from './pages/Pngword';
import Basket from './pages/Basket';
import Bowls from './pages/Bowls';
import Plates from './pages/Plates';
import Kitchenware from './pages/Kitchenware';
import JoinPage from './pages/JoinPage.tsx';
import UserInfo from './pages/UserInfo.tsx';
import Favorite from './pages/Favorite.tsx';
import OrderHistory from './pages/OrderHistory.tsx';
import MyPage from './pages/MyPage.tsx';
import SearchResults from './pages/SearchResults.tsx';



import Image from './components/ImagePage';
// import Search from './components/Search';

import Shipping from './pages/Shipping';
import ShippingAddress from './components/ShippingAddress';
import BowlsDetail from "./pages/BowlsDetail.tsx";
import CupDetail from "./pages/CupDetail.tsx";
import PlatesDetail from "./pages/PlatesDetail.tsx";
import KitchenwareDetail from "./pages/KitchenwareDetail.tsx";
// import Search from './components/Search';





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
          {/* <Route path="/detail" component={Detail} /> */}
          <Route path="/login" component={Login} />
          <Route path="/Customer6" component={Customer6} />
          <Route path="/Basket" component={Basket} />
          <Route path="/Pngword" component={Pngword} />
          <Route path="/Bowls" component={Bowls} />
          <Route path="/Plates" component={Plates} />
          <Route path="/Kitchenware" component={Kitchenware} />
          <Route path="/img" component={Image} />
          <Route path="/searchresults" component={SearchResults} />

          {/* <Route path="/search" component={Search} /> */}

          <Route path="/main" component={Main} />
          <Route path="/joinpage" component={JoinPage} />
          <Route path="/MyPage" component={MyPage} />
          <Route path="/MyPage/UserInfo" component={UserInfo} />
          <Route path="/MyPage/OrderHistory" component={OrderHistory} />
          <Route path="/MyPage/Favorite" component={Favorite} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/shippingaddress" component={ShippingAddress} />
          <Route path="/bowlsdetail/:id" component={BowlsDetail} />
          <Route path="/cupdetail/:id" component={CupDetail} />
          <Route path="/platesdetail/:id" component={PlatesDetail} />
          <Route path="/Kitchenwaredetail/:id" component={KitchenwareDetail} />
          <Route path="/Kitchenwaredetail/:id" component={KitchenwareDetail} />


          {/* <Route path="/search" component={Search} /> */}



        </Switch>
      </Router>
    </div>
  );
}

export default App;








