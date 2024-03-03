import { Navbar, Container } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col>1</Col>
          <Col>1</Col>
          <Col>1</Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
