import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./HeaderBottom.module.scss";

const cx = classNames.bind(styles);

function HeaderBottom({ isScrolled }) {
  return (
    <Container fluid className={cx("header-bottom", { scrolled: isScrolled })}>
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
