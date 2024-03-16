import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import DaumPostcode from "react-daum-postcode";

interface AddressSearchModalProps {
  open: boolean;
  onClose: () => void;
  onAddressSelect: (address: string, zipcode: string) => void;
}

function AddressSearchModal({
  open,
  onClose,
  onAddressSelect,
}: AddressSearchModalProps) {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedZipcode, setSelectedZipcode] = useState("");

  useEffect(() => {
    if (open) {
      setSelectedAddress("");
      setSelectedZipcode("");
    }
  }, [open]);

  const handleAddressSelect = () => {
    onAddressSelect(selectedAddress, selectedZipcode);
    onClose();
  };

  const handleDaumPostcodeComplete = (data: any) => {
    setSelectedAddress(data.address);
    setSelectedZipcode(data.zonecode);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-content">
        <DaumPostcode onComplete={handleDaumPostcodeComplete} />
        <button onClick={handleAddressSelect}>선택</button>
        {selectedAddress && (
          <div>
            <p>선택한 주소: {selectedAddress}</p>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default AddressSearchModal;