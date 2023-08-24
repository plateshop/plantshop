import React, { useState } from "react";
import {
  ShippingAddressBodyStyled,
  ShippingAddressCloseIconWrap,
  ShippingAddressContainerStyled,
  ShippingAddressFormsWrap,
  ShippingAddressHeaderStyled,
  ShippingAddressTitleStyled,
} from "../styles/Shipping.css";
import CloseIcon from "../icons/CloseIcon/CloseIcon";

import { useDaumPostcodePopup } from "react-daum-postcode";

interface Forms {
  recipient: string;
  zipcode: string;
  address: string;
  detailAddress: string;
}

export default function ShippingAddress() {
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

    console.log(data, fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
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
    <ShippingAddressContainerStyled>
      <ShippingAddressBodyStyled>
        <ShippingAddressHeaderStyled>
          <ShippingAddressTitleStyled>배송지 작성</ShippingAddressTitleStyled>
          <ShippingAddressCloseIconWrap>
            <CloseIcon width={32} height={32} />
          </ShippingAddressCloseIconWrap>
        </ShippingAddressHeaderStyled>
        <ShippingAddressFormsWrap>
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
        </ShippingAddressFormsWrap>
      </ShippingAddressBodyStyled>
    </ShippingAddressContainerStyled>
  );
}
