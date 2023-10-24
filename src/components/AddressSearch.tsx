import React, { useState } from "react";
import axios from "axios";
import DaumPostcode from "react-daum-postcode";

interface AddressSearchProps {
  onAddressSelect: (address: string, zipcode: string) => void;
}

const AddressSearch: React.FC<AddressSearchProps> = ({ onAddressSelect }) => {
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedZipcode, setSelectedZipcode] = useState("");

  const handleAddressSearch = () => {
    setAddressModalOpen(true);
  };

  const handleAddressModalClose = () => {
    setAddressModalOpen(false);
  };

  const handleComplete = (data: any) => {
    const { address, zonecode } = data;
    setSelectedAddress(address);
    setSelectedZipcode(zonecode);
    setAddressModalOpen(false);
    onAddressSelect(address, zonecode);
  };

  return (
    <div>
      <button onClick={handleAddressSearch}>주소 검색</button>
      {isAddressModalOpen && (
        <DaumPostcode
          onComplete={handleComplete}
          autoClose
          animation
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: 1000,
          }}
        />
      )}
      <div>
        <label>선택된 주소: {selectedAddress}</label>
        <label>우편번호: {selectedZipcode}</label>
      </div>
    </div>
  );
};

export default AddressSearch;
