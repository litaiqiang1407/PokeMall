import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { Title } from "~/components";

import classNames from "classnames/bind"; // CSS Module
import styles from "./Payment.module.scss"; // CSS Module
const cx = classNames.bind(styles); // CSS Module

function Payment() {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
  });
  const [showMyAddress, setShowMyAddress] = useState(false);

  const handleCloseMyAddress = () => setShowMyAddress(false);
  const handleShowMyAddress = () => setShowMyAddress(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);
  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Title title="Payment - PokeMall" />
      {/* Header */}
      <Container className={cx("payment-header")}>
        <FontAwesomeIcon icon={faReceipt} className={cx("payment-icon")} />
        <span className={cx("header-title")}>Payment</span>
      </Container>

      {/* Delivery Address */}
      <Container className={cx("delivery-address")}>
        <Container className={cx("address-header")}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={cx("address-icon")}
          />
          <span className={cx("header-title")}>Delivery Address</span>
        </Container>
        <Container className={cx("address-content")}>
          <Row>
            <Col lg={2}>
              <Container className={cx("user-info")}>
                <span className={cx("info-content")}>{userData.name}</span>
                <span className={cx("info-content")}>{userData.phone}</span>
              </Container>
            </Col>
            <Col lg={8}>
              <Container className={cx("address")}>
                <span className={cx("address-content")}>
                  Jl. Pallet No. 1, Pallet Town, Kanto
                </span>
              </Container>
            </Col>
            <Col lg={2}>
              <Container className={cx("change-address")}>
                <button
                  className={cx("btn-change")}
                  onClick={handleShowMyAddress}
                >
                  Change Address
                </button>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <Modal
        className={cx("my-address-modal")}
        show={showMyAddress}
        onHide={handleCloseMyAddress}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>My address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button>Add New Address</button>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseMyAddress}>Cancel</button>
          <button onClick={handleCloseMyAddress}>Confirm</button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Payment;
