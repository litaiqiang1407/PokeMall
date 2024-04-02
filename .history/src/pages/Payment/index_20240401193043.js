import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { Title } from "~/components";

import classNames from "classnames/bind"; // CSS Module
import styles from "./Payment.module.scss"; // CSS Module
const cx = classNames.bind(styles); // CSS Module

function Payment() {
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
          <span className={cx("header-title")}>Delivery Address</span>
        </Container>
        <Container className={cx("address-content")}>
          <Container className={cx("user-info")}>
            <span className={cx("name")}>Ash Ketchum</span>
            <span className={cx("phone")}>+6281234567890</span>
          </Container>
          <Container className={cx("address")}>
            <span>Jl. Pallet No. 1, Pallet Town, Kanto</span>
          </Container>
          <Container className={cx("change-address")}>
            <span>Change Address</span>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default Payment;
