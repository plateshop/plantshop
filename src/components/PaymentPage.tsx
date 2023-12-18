import React, { useState } from "react";

interface PaymentInfo {
  cardCompany?: string;
  cardNumber?: string;
  cvc?: string;
  cardExpiration?: string;
  bank?: string;
  virtualAccount?: string;
}

const PaymentPage: React.FC = () => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({});

  const enterCardPaymentInfo = (
    company: string,
    number: string,
    cvc: string,
    expiration: string
  ): void => {
    setPaymentInfo({
      ...paymentInfo,
      cardCompany: company,
      cardNumber: number,
      cvc: cvc,
      cardExpiration: expiration,
    });
  };

  const enterBankPaymentInfo = (bank: string): void => {
    const virtualAccount = generateVirtualAccountNumber(bank);

    setPaymentInfo({
      ...paymentInfo,
      bank: bank,
      virtualAccount: virtualAccount,
    });
  };

  const generateVirtualAccountNumber = (bank: string): string => {
    const randomDigits = Math.floor(Math.random() * 1000000000)
      .toString()
      .padStart(9, "0");
    return `${bank}-${randomDigits}`;
  };

  const confirmPaymentInfo = (): void => {
    console.log("결제 정보 확인:");
    console.log(paymentInfo);
  };

  return (
    <div>
      {/* 카드 결제 입력 폼 */}
      <div>
        <h3>카드 결제</h3>
        {/* 각 필드에 대한 입력 폼을 만들어주세요 */}
        {/* 예: */}
        <input
          type="text"
          placeholder="카드 회사"
          onChange={(e) =>
            enterCardPaymentInfo(e.target.value, /* number, */ "", "", "")
          }
        />
      </div>

      {/* 무통장 입금 입력 폼 */}
      <div>
        <h3>무통장 입금</h3>
        {/* 각 필드에 대한 입력 폼을 만들어주세요 */}
        {/* 예: */}
        <input
          type="text"
          placeholder="은행 선택"
          onChange={(e) => enterBankPaymentInfo(e.target.value)}
        />
      </div>

      {/* 결제 정보 확인 버튼 */}
      <button onClick={confirmPaymentInfo}>결제 정보 확인</button>
    </div>
  );
};

export default PaymentPage;
