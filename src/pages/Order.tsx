import React, { useState } from "react";
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
          {/* 주문 페이지 내용 추가 */}
          {/* 주문하기 버튼을 누르면 handleOrder 함수를 호출하도록 구현 */}
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

export default App;
