import { Navbar, Container, Nav, Button } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src="../assets/images/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Your Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
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
