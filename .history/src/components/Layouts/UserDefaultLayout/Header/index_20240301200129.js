import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
