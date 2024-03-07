import { useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "~/functions/Contexts/authContext";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  const { isLoggedIn } = useContext(AuthContext);

  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(120);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 70) {
        setIsScrolled(true);
        setHeaderHeight(70);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Container
        fluid
        className={cx("header-container", { scrolled: isScrolled })}
      >
        <Container className={cx("header-top")}>
          <Row>
            <Col lg={3}>
              <Container className={cx("header-logo")}>
                <Navbar.Brand href="/">
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
              {isLoggedIn ? (
                <div className={cx("user-options")}>
                  <Link className={cx("options-item")} to="/order">
                    <FontAwesomeIcon icon={faReceipt} />
                  </Link>

                  <Link className={cx("options-item")} to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Link>

                  <Link className={cx("options-item")} to="/profile">
                    <img
                      src={"https://avatarfiles.alphacoders.com/322/322784.png"}
                      alt="avatar"
                      className={cx("avatar")}
                    />
                  </Link>
                </div>
              ) : (
                <div className={cx("authentication")}>
                  <Link className={cx("btn-signup")} to="/signup">
                    Sign up
                  </Link>
                  <Link className={cx("btn-login")} to="/login">
                    Log in
                  </Link>
                </div>
              )}
            </Col>
          </Row>
        </Container>

        <Container fluid className={cx("header-bottom")}>
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
      <Container className={cx("under-header")}></Container>
    </header>
  );
}

export default Header;
