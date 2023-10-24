import React, { useState } from "react";
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

  const handleAddressSelect = () => {
    onAddressSelect(selectedAddress, selectedZipcode);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-content">
        <DaumPostcode
          onComplete={(data) => {
            setSelectedAddress(data.address);
            setSelectedZipcode(data.zonecode);
          }}
        />
        <button onClick={handleAddressSelect}>선택</button>
      </div>
    </Modal>
  );
}

export default AddressSearchModal;

/*const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal-close-button');
const modalBody = document.querySelector('.modal_body');

const showImgModal = src => {
  // 모달기능
  const img = document.querySelector('.modal_body > img');
  img.src = src;
  modal.style.display = 'block';
  // body 스크롤 막기
  document.body.className = 'not-scroll';
};

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.className = '';
});
*/
