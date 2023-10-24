import React, { useState, ChangeEvent } from "react";
import ShippingAddress from "../styles/ShippingAddress.css";
import CloseIcon from "../components/CloseIcon";
import { useDaumPostcodePopup, DaumPostcodeData } from "react-daum-postcode";

interface Forms {
  recipient: string;
  zipcode: string;
  address: string;
  detailAddress: string;
}

export default function ShippingAddress() {
  const [forms, setForms] = useState({
    recipient: "",
    zipcode: "",
    address: "",
    detailAddress: "",
  });

  const open = useDaumPostcodePopup();

  const handleComplete = (data: DaumPostcodeData) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setForms({
      ...forms,
      address: fullAddress,
      zipcode: data.zonecode,
    });

    console.log(data, fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleDetailAddressChange = (e) => {
    setForms({
      ...forms,
      detailAddress: e.target.value,
    });
  };

  return (
    <div className="shipping-address-container">
      <div className="shipping-address-body ">
        <div className="shipping-address-header">
          <div className="shipping-address-title">배송지 작성</div>
          <div className="shipping-address-close-icon-wrap">
            <CloseIcon width={32} height={32} />
          </div>
        </div>
        <div className="shipping-address-forms-wrap">
          <input type="text" disabled value={forms.zipcode} />
          <input type="text" disabled value={forms.address} />
          <input
            type="text"
            value={forms.detailAddress}
            onChange={handleDetailAddressChange}
          />
          <button type="button" onClick={handleClick}>
            주소검색
          </button>
        </div>
      </div>
    </div>
  );
}
