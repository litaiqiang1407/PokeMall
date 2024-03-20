import { useState, useEffect } from "react";

import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./AdminLayout.module.scss";
const cx = classNames.bind(styles);

function AdminLayout({ children }) {
  const [userData, setUserData] = useState({
    avatar: "",
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  return (
    <div>
      <Container fluid className={cx("admin-layout")}>
        <Container className={cx("header-logo")}>
          <Navbar.Brand href="/" style={{ marginLeft: "44px" }}>
            <img
              src="../assets/img/logo.png"
              height={42}
              width={114.03}
              className={cx("logo")}
              alt="Logo"
            />
          </Navbar.Brand>
        </Container>
        <Container className={cx("header-account")}>
          <Link className={cx("options-item")}>
            <img src={userData.avatar} alt="avatar" className={cx("avatar")} />
          </Link>
        </Container>
      </Container>
      <Container style={{ height: "70px" }}></Container>
      <div style={{ padding: 0 }}>{children}</div>
    </div>
  );
}

export default AdminLayout;
