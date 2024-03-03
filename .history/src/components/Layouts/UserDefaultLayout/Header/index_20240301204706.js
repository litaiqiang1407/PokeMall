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
            <Col lg={3}>
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="#home">
                    <img
                      src="../assets/img/logo.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top logo"
                      alt="Logo"
                    />
                  </Navbar.Brand>
                </Container>
              </Navbar>
            </Col>
            <Col lg={6}>2</Col>
            <Col lg={3}>3</Col>
          </Row>
        </Container>
      </Container>
    </header>
  );
}

export default Header;
