import { Container } from "react-bootstrap";

import classNames from "classnames/bind"; // CSS Module
import styles from "./Payment.module.scss"; // CSS Module
import { Title } from "chart.js";
const cx = classNames.bind(styles); // CSS Module

function Payment() {
  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Title className={cx("title")}>Payment</Title>
    </Container>
  );
}

export default Payment;
