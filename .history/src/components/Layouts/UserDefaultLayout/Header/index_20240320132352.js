import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Authentication from "../../Components/Authentication";
import Search from "../../Components/Search";
import HeaderBottom from "../../Components/HeaderBottom";

const cx = classNames.bind(styles);

function Header() {
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
        setHeaderHeight(120);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header style={{ height: `${headerHeight}px` }}>
      <Container
        fluid
        className={cx("header-container", { scrolled: isScrolled })}
        style={{ height: `${headerHeight}px` }}
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
              <Search isScrolled={isScrolled} />
            </Col>
            <Col lg={3}>
              <Authentication />
            </Col>
          </Row>
        </Container>
        <HeaderBottom isScrolled={isScrolled} />
        {/* <Container fluid className={cx("header-bottom")}>
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
              <Nav.Link className={cx("nav-link")} href="#about">
                About
              </Nav.Link>
              <Link className={cx("nav-link")} to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar>
        </Container> */}
      </Container>
      <Container style={{ height: `${headerHeight}px` }}></Container>
    </header>
  );
}

export default Header;
