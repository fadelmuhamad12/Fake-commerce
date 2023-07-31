import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalSelected = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modal, setModal] = useState(false);

  const handleShow = (products) => {
    setSelectedProduct(products);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        {selectedProduct && (
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalSelected;
