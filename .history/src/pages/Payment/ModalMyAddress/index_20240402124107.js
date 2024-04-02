import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ModalMyAddress.module.scss"; // CSS Module
const cx = classNames.bind(styles); // CSS Module

function ModalMyAddress({ show }) {
  const [show, setShow] = useState(true);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [showAddressSelection, setShowAddressSelection] = useState(false);
  const [address, setAddress] = useState("");
  const [activeTab, setActiveTab] = useState("province");
  const [listProvince, setListProvince] = useState([]);
  const [listDistrict, setListDistrict] = useState([]);
  const [listWard, setListWard] = useState([]);

  const handleCloseMyAddress = () => setShow(false);
  const handleShowMyAddress = () => setShow(true);

  const handleCloseAddAddress = () => setShowAddAddress(false);
  const handleShowAddAddress = () => {
    setShow(false);
    setShowAddAddress(true);
  };

  const handleBack = () => {
    setShowAddAddress(false);
    setShow(true);
  };

  const handleShowAddressSelection = () => setShowAddressSelection(true);
  return (
    <Modal
      className={cx("my-address-modal")}
      show={show}
      onHide={handleCloseMyAddress}
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
        <button className={cx("btn-second")} onClick={handleCloseMyAddress}>
          Cancel
        </button>
        <button className={cx("btn-primary")} onClick={handleCloseMyAddress}>
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMyAddress;
