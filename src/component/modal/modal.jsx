// ModalButton.js

import React, { useState } from "react";
import { Button, Modal } from "antd";
import './modal.css';
const GenreicModal = ({ buttonText, modalTitle, modalContent }) => {
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
  return (
    <div className="modal-class">
      <Button type="primary" className="btn-primary"  onClick={() => showModal()}>
        {buttonText}
      </Button>
      <Modal
        title={modalTitle}
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default GenreicModal;
