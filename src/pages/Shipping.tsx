import React, { useState } from "react";
import CloseIcon from "../components/CloseIcon";
import { useDaumPostcodePopup } from "react-daum-postcode";
import '../styles/Shipping.css';


interface Forms {
  recipient: string;
  zipcode: string;
  address: string;
  detailAddress: string;
}

export default function Shipping() {
  const [forms, setForms] = useState<Forms>({
    recipient: "",
    zipcode: "",
    address: "",
    detailAddress: "",
  });

  const open = useDaumPostcodePopup();

  const handleComplete = (data: any) => {
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

    console.log(data, fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleDetailAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForms({
      ...forms,
      detailAddress: e.target.value,
    });
  };

  return (
    <div className="ShippingAddressContainerStyled">
      <div className="ShippingAddressBodyStyled">
        <div className="ShippingAddressHeaderStyled">
          <div className="ShippingAddressTitleStyled">배송지 작성</div>
          <div className="ShippingAddressCloseIconWrap">
            <CloseIcon width={32} height={32} />
          </div>
        </div>
        <div className="ShippingAddressFormsWrap">
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