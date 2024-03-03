import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Container>Header</Container>
    </header>
  );
}

export default Header;
