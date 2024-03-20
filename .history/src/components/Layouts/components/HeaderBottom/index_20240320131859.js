import { useContext, useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";

import { AuthContext } from "~/functions/authContext";

import classNames from "classnames/bind";
import styles from "./HeaderBottom.module.scss";
import Search from "../../Components/Search";
import Authentication from "../../Components/Authentication";

const cx = classNames.bind(styles);

function HeaderBottom() {
  return (
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
          <Nav.Link className={cx("nav-link")} href="/about">
            About
          </Nav.Link>
          <Link className={cx("nav-link")} to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default HeaderBottom;
