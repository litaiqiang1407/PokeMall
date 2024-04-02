import { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Form, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faCaretDown,
  faLocationDot,
  faMagnifyingGlass,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { Title } from "~/components";

import { interactThirdParty } from "~/functions/interactData";
import { districtURL, provinceURL, tokenGHN, wardURL } from "~/data";

import classNames from "classnames/bind"; // CSS Module
import styles from "./Payment.module.scss"; // CSS Module
const cx = classNames.bind(styles); // CSS Module

function ModalMyAddress() {
  return (
    <Modal
      className={cx("my-address-modal")}
      show={showMyAddress}
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
