import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const CartItem: React.FC<{ item: Item }> = ({ item }) => {
  return <div className="cart-item">{item.name}</div>;
};

const CartCounter: React.FC<{ itemCount: number }> = ({ itemCount }) => {
  return (
    <div className="cart-counter">장바구니에 담긴 물건 수: {itemCount}</div>
  );
};

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <h1>쇼핑몰 장바구니</h1>
      <CartCounter itemCount={cartItems.length} />
      <div className="item-list">
        <button onClick={() => addToCart({ id: 1, name: "상품 1" })}>
          상품 1 담기
        </button>
        <button onClick={() => addToCart({ id: 2, name: "상품 2" })}>
          상품 2 담기
        </button>
        {/* 다른 상품 버튼들도 추가 가능 */}
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
