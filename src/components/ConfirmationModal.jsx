import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ConfirmationModal = (props) => {
  const { show, onHandleClose, onHandleSave } = props;

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>Seguro quieres eliminar este campo</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHandleClose}>
            Cancelar
          </Button>
          <Button clasne="primary" onClick={onHandleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
