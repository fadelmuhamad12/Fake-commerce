import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalSelected = ({ modal, handleClose, SelectedProduct }) => {
  return (
    <>
      <Modal
        show={modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {SelectedProduct && (
          <Modal.Body>
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold">{SelectedProduct.title}</div>
              <img
                src={SelectedProduct.image}
                alt="image"
                style={{ width: "150px" }}
                className="my-4"
              />
              <div className="font-bold">$ {SelectedProduct.price}</div>
            </div>
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add To Cart</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalSelected;
