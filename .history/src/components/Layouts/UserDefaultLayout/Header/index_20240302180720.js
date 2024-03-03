import { Navbar, Container, Row, Col, Button, Nav } from "react-bootstrap";

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
                <Nav.Link
                  className={cx("btn-signup text-center")}
                  href="/signup"
                >
                  Sign up
                </Nav.Link>
                <Nav.Link className={cx("btn-login")} href="/login">
                  Log in
                </Nav.Link>
                {/* <Button className={cx("btn-signup")}>Sign up</Button>
                <Button className={cx("btn-login")}>Log in</Button> */}
              </div>
            </Col>
          </Row>
        </Container>

        <Container className={cx("header-bottom")}>
          <Navbar expand="lg" className={cx("navbar-header")}>
            <Nav className="mx-auto">
              <Nav.Link className={cx("nav-link")} href="#types">
                Types
              </Nav.Link>
              <Nav.Link className={cx("nav-link")} href="#all-products">
                All Products
              </Nav.Link>
              <Nav.Link className={cx("nav-link")} href="#suggestions">
                Suggestions
              </Nav.Link>
              <Nav.Link className={cx("nav-link")} href="#help-center">
                Help Center
              </Nav.Link>
              <Nav.Link className={cx("nav-link")} href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    </header>
  );
}

export default Header;
