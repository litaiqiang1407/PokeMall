import { Navbar, Container, Nav, Button } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src="../assets/img/logo.png"
              className={cx("d-inline-block align-top logo")}
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex">
              <input
                type="text"
                placeholder="Search..."
                className="form-control me-2"
              />
              <Button variant="outline-success">Search</Button>
              <Button variant="outline-primary" className="ms-2">
                Login
              </Button>
              <Button variant="primary" className="ms-2">
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
