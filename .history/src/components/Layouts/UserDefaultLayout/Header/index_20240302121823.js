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
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
              <div className={cx("header-search")}>
                <input
                  className={cx("search-input")}
                  placeholder="Search for pokemon figures..."
                />
                <button className={cx("btn-search")}>
                  <FontAwesomeIcon
                    className={cx("icon-search")}
                    icon={faMagnifyingGlass}
                  />
                </button>
              </div>
            </Col>
            <Col lg={3}>
              <div className={cx("authentication")}>
                <Button className={cx("btn-login")}>Sign up</Button>
                <Button className={cx("btn-register")}>Log in</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </header>
  );
}

export default Header;
