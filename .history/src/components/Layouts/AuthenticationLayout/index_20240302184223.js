import { Container, Navbar, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./AuthenticationLayout.module.scss";

const cx = classNames.bind(styles);

function AuthenticationLayout({ children }) {
  return (
    <>
      <header>
        <Container fluid className={cx("header-container")}>
          <Container className={cx("header-logo")}>
            <Navbar.Brand href="/">
              <img
                src="../assets/img/logo.png"
                height={66}
                className={cx("logo")}
                alt="Logo"
              />
            </Navbar.Brand>
          </Container>
        </Container>
      </header>
      <div className={cx("body-container")}>
        <div className={cx("image-container")}>
          <img
            src="../assets/img/authentication.jpg"
            alt="Authentication Image"
            height={500}
            width={500}
          />
        </div>
        <div className={cx("form-container")}>{children}</div>
      </div>
    </>
  );
}

export default AuthenticationLayout;
