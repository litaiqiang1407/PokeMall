import { useState, useEffect } from "react";

import { Navbar, Container, Row, Col } from "react-bootstrap";

import Authentication from "../../Components/Authentication";
import Search from "../../Components/Search";
import HeaderBottom from "../../Components/HeaderBottom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
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
  const handleExpandSearch = (isExpand) => {
    setIsScrolled(!isExpand);
  };

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
              <Search isScrolled={isScrolled} isExpand={handleExpandSearch} />
            </Col>
            <Col lg={3}>
              <Authentication />
            </Col>
          </Row>
        </Container>
        <HeaderBottom isScrolled={isScrolled} />
      </Container>
      <Container style={{ height: `${headerHeight}px` }}></Container>
    </header>
  );
}

export default Header;
