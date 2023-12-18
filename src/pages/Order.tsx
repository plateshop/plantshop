/*import React, { useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

// 상품 정보 타입
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "상품 1", price: 10000 },
  { id: 2, name: "상품 2", price: 20000 },
  { id: 3, name: "상품 3", price: 30000 },
];

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  // 주문 처리 함수
  const handleOrder = () => {
    if (selectedProduct) {
      // 여기서 주문 처리 로직을 작성합니다.
      console.log(
        `주문 완료: ${selectedProduct.name}, 가격: ${selectedProduct.price}`
      );
      setModalOpen(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        상품 목록
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={4} key={product.id}>
            <div
              onClick={() => {
                setSelectedProduct(product);
                setModalOpen(true);
              }}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                cursor: "pointer",
                backgroundColor:
                  selectedProduct?.id === product.id
                    ? "#f0f0f0"
                    : "transparent",
              }}
            >
              <Typography variant="h6">{product.name}</Typography>
              <Typography>{`${product.price} 원`}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>

      <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>주문 페이지</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            선택한 상품: {selectedProduct?.name}
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            onClick={handleOrder}
            disabled={!selectedProduct}
          >
            주문하기
          </Button>
        </DialogContent>
      </Dialog>
    </Container>
  );
}; 

export default App;*/

import React, { useState } from "react";
import { useUser } from "../components/UserProvider";

interface Product {
  id: number;
  name: string;
  price: number;
}

enum PaymentMethod {
  Card = "card",
  BankTransfer = "bankTransfer",
}

const Order: React.FC = () => {
  const { address } = useUser();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [shippingAddress, setShippingAddress] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null
  );

  const handleProductSelection = (product: Product) => {
    const isProductSelected = selectedProducts.some((p) => p.id === product.id);

    if (isProductSelected) {
      const updatedProducts = selectedProducts.filter(
        (p) => p.id !== product.id
      );
      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = selectedProducts.reduce(
      (acc, product) => acc + product.price,
      0
    );
    setTotalPrice(totalPrice);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress(event.target.value);
  };

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  const handleOrderSubmit = () => {
    console.log("Order submitted:", {
      selectedProducts,
      shippingAddress,
      totalPrice,
      paymentMethod,
    });
  };

  return (
    <div>
      <h2>주문 페이지</h2>

      <div>
        <h3>상품 목록</h3>
        {selectedProducts.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
            <span>{product.price}원</span>
            <button onClick={() => handleProductSelection(product)}>
              {selectedProducts.some((p) => p.id === product.id)
                ? "선택 해제"
                : "선택"}
            </button>
          </div>
        ))}
        <p>총 주문 금액: {totalPrice}원</p>
      </div>

      <div>
        <h3>배송 정보</h3>
        <label>
          배송 주소:
          <input type="text" value={address} readOnly />
        </label>
      </div>

      <div>
        <h3>결제</h3>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value={PaymentMethod.Card}
            checked={paymentMethod === PaymentMethod.Card}
            onChange={() => handlePaymentMethodChange(PaymentMethod.Card)}
          />
          카드 결제
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value={PaymentMethod.BankTransfer}
            checked={paymentMethod === PaymentMethod.BankTransfer}
            onChange={() =>
              handlePaymentMethodChange(PaymentMethod.BankTransfer)
            }
          />
          무통장 입금
        </label>
        {/* 결제 방식에 따른 추가 입력 폼 기입 가능. */}
      </div>

      <button onClick={handleOrderSubmit}>주문 완료</button>
    </div>
  );
};

export default Order;
