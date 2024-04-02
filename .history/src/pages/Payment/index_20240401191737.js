import { Container } from "react-bootstrap";

import classNames from "classnames/bind"; // CSS Module
import styles from "./Payment.module.scss"; // CSS Module
import { Title } from "~/components";
const cx = classNames.bind(styles); // CSS Module

function Payment() {
  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Title title="Payment - PokeMall" />
    </Container>
  );
}

export default Payment;
