import { Container } from "react-bootstrap";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ShoppingCart.module.scss"; // CSS Module

const cx = classNames.bind(styles); // CSS Module

function ShoppingCart() {
  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Container>Hwllo</Container>
    </Container>
  );
}

export default ShoppingCart;
