import { Container, Navbar } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Container fluid>Header</Container>
    </header>
  );
}

export default Header;
