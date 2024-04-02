import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ModalMyAddress.module.scss"; // CSS Module
import ModalAddAddress from "../ModalAddAddress";
const cx = classNames.bind(styles); // CSS Module

function ModalMyAddress({ show, close }) {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const handleClose = () => {
    close(false);
  };

  const handleShowAddAddress = () => {
    setShowAddAddress(true);
    handleClose();
  };

  const handleCloseAddAddress = (status) => {
    setShowAddAddress(status);
  };
  const handleBackMyAddress = (status) => {
    close(status);
  };

  return (
    <>
      <Modal
        className={cx("my-address-modal")}
        show={show}
        onHide={handleClose}
        dialogClassName="modal-50w"
        centered
      >
        <Modal.Header closeButton className={cx("modal-header")}>
          <Modal.Title className={cx("modal-title")}>My address</Modal.Title>
        </Modal.Header>
        <Modal.Body className={cx("modal-body")}>
          <button className={cx("btn-add")} onClick={handleShowAddAddress}>
            <FontAwesomeIcon icon={faAdd} className={cx("add-icon")} />
            Add New Address
          </button>
        </Modal.Body>
        <Modal.Footer>
          <button className={cx("btn-second")} onClick={handleClose}>
            Cancel
          </button>
          <button className={cx("btn-primary")} onClick={handleClose}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
      <ModalAddAddress
        show={showAddAddress}
        close={handleCloseAddAddress}
        back={handleBackMyAddress}
      />
    </>
  );
}

export default ModalMyAddress;
