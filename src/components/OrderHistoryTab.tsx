import React from "react";

interface OrderHistoryTabProps {
  orderHistory: string[];
}

const OrderHistoryTab: React.FC<OrderHistoryTabProps> = ({ orderHistory }) => {
  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orderHistory.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistoryTab;
