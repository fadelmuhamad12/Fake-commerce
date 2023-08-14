import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ElectronicSelected = ({handleCloseModal, modal, selectedElectronic,}) => {
  return (
    <div>
      <Modal
        show={modal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        {selectedElectronic && (
          <Modal.Body>
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold">{selectedElectronic.title}</div>
              <img
                src={selectedElectronic.image}
                alt="image"
                style={{ width: "150px" }}
                className="my-4"
              />
              <div className="font-bold">$ {selectedElectronic.price}</div>
            </div>
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">Add To Cart</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ElectronicSelected;
