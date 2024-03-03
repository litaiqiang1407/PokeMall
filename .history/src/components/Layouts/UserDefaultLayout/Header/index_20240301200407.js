import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Button variant="outline-success">Button</Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
