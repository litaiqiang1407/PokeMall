import { Container, Navbar } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Navbar>
        <Container>Header</Container>
      </Navbar>
    </header>
  );
}

export default Header;
