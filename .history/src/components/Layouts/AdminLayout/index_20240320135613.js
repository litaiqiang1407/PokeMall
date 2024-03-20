import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./AdminLayout.module.scss";
const cx = classNames.bind(styles);

function AdminLayout({ children }) {
  const [userData, setUserData] = useState({
    avatar: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userData");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <Container fluid className={cx("admin-layout")}>
        <Container className={cx("header-logo")}>
          <Navbar.Brand href="/">
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
          <Tippy
            render={(attrs) => (
              <div {...attrs} className={cx("custom-tooltip")}>
                <button onClick={handleLogout} className={cx("logout-button")}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                </button>
              </div>
            )}
            interactive={true}
            arrow={true}
            placement="bottom"
            theme="custom"
          >
            <Link className={cx("options-item")}>
              <img
                src={userData.avatar}
                alt="avatar"
                className={cx("avatar")}
              />
            </Link>
          </Tippy>
        </Container>
      </Container>
      <div style={{ padding: 0 }}>{children}</div>
    </div>
  );
}

export default AdminLayout;
