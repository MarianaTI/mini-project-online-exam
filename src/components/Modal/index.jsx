import React from "react";
import { Modal } from "@mui/material";
import { ModalContent, ModalHead, ModalMain } from "./index.style";

const ModalComponent = ({ open, onClose, title, children }) => {
  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      onClose(event, reason);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>
        <ModalHead>
          <h1>{title}</h1>
        </ModalHead>
        <ModalMain>{children}</ModalMain>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
