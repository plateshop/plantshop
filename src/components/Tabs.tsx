import React, { useState } from 'react';
import '../styles/Tabs.css';

function Tabs() {
  const [toggleState, setToggleState] = useState<number>(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="containerTab">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          국내배송상품
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          해외배송상품
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>국내배송상품</h2>
          <hr />
          <p>장바구니가 비어 있습니다.</p>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>해외배송상품</h2>
          <hr />
          <p>장바구니가 비어 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
