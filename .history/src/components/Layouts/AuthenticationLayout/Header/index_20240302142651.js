import { Container,  Navbar} from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <Container className={cx("header-container")}>
        <Navbar.Brand href="#home">
          <img
            src="../assets/img/logo.png"
            height={42}
            width={114.03}
            className={cx("logo")}
            alt="Logo"
          />
          <span className={cx("title")}>Log in</span>
        </Navbar.Brand>
      </Container>
    </header>
  );
}
export default Header;
