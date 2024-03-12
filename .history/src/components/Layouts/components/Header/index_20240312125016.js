import Tippy from "@tippyjs/react/headless";
import { useContext, useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faReceipt,
  faSignOutAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "~/functions/Contexts/authContext";
import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  const { isAdminLoggedIn } = useContext(AuthContext);
  const [adminData, setUserData] = useState({
    avatar: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  // Function to handle search input change

  const handleLogout = () => {
    localStorage.setItem("isAdminLoggedIn", "false");
    localStorage.removeItem("adminData");
    navigate("/admin/login");
    window.location.reload();
  };

  return (
    <header>
      <Container fluid className={cx("header-container")}>
        <Container className={cx("header-top")}>
          <Row>
            <Col lg={3}>
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
            </Col>
            <Col lg={6}></Col>
            <Col lg={3}>
              <Tippy
                render={(attrs) => (
                  <div {...attrs} className={cx("custom-tooltip")}>
                    <button
                      onClick={handleLogout}
                      className={cx("logout-button")}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                    </button>
                  </div>
                )}
                interactive={true}
                arrow={true}
                placement="bottom"
                theme="custom"
              >
                <Link className={cx("admin-avatar")} to="/admin-profile">
                  <img
                    src={adminData.avatar}
                    alt="avatar"
                    className={cx("avatar")}
                  />
                </Link>
              </Tippy>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container style={{ height: "70px" }}></Container>
    </header>
  );
}

export default Header;
