import {
  Navbar,
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              <Container className={cx("header-logo")}>
                <Navbar.Brand href="#home">
                  <img
                    src="../assets/img/logo.png"
                    height={42}
                    width={114.03}
                    className={cx("logo")}
                    alt="Logo"
                  />
                </Navbar.Brand>
              </Container>
            </Col>
            <Col lg={6}>
              <Container className={cx("header-search")}>
                <InputGroup className={cx("search-group")}>
                  <Form.Control
                    className={cx("search-input")}
                    placeholder="Search for pokemon figures...."
                  />
                  <Button className={cx("btn-search")}>
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                  </Button>
                </InputGroup>
              </Container>
            </Col>
            <Col lg={3}>3</Col>
          </Row>
        </Container>
      </Container>
    </header>
  );
}

export default Header;
