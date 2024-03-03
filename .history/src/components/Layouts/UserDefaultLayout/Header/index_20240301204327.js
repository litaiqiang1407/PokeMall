import { Navbar, Container, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Container className={cx("header-container")}>
        <Container fluid className={cx("header-top")}>
          <Row>
            <Col lg={3}>1</Col>
            <Col lg={6}>2</Col>
            <Col lg={3}>3</Col>
          </Row>
        </Container>
      </Container>
    </header>
  );
}

export default Header;
