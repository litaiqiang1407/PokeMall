import { Link, Container, classNames, styles, cx } from "~/imports/imports";

import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./AuthenticationLayout.module.scss";

const cx = classNames.bind(styles);

function AuthenticationLayout({ children }) {
  return (
    <>
      <header>
        <Container fluid className={cx("header-container")}>
          <Container className={cx("header-logo")}>
            <Link to="/">
              <img
                src="../assets/img/logo.png"
                height={66}
                className={cx("logo")}
                alt="Logo"
              />
            </Link>
          </Container>
        </Container>
      </header>
      <Container className={cx("body-container")}>
        <div className={cx("image-container")}>
          <img
            src="../assets/img/authentication.jpg"
            alt="Authentication Image"
            height={500}
            width={500}
          />
        </div>
        <div className={cx("form-container")}>{children}</div>
      </Container>
    </>
  );
}

export default AuthenticationLayout;
