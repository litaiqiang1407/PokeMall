import { Container, Navbar } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Container fluid className={cx("header-container")}>
        <Container className={cx("header-logo")}>
          <Navbar.Brand href="#home">
            <img
              src="../assets/img/logo.png"
              height={42}
              width={114.03}
              className={cx("logo")}
              alt="Logo"
            />
          </Navbar.Brand>
        </Container>
      </Container>
    </header>
  );
}
export default Header;
