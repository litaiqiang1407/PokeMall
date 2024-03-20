import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChartLine,
  faDragon,
  faReceipt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);

function Menu() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className={cx("container")}>
      <Container className={cx("header")}>
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
      </Container>
      <Container className={cx("menu-headers")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Container>
      <Container className={cx("menu-content")}>
        <Container
          className={cx("menu-item", {
            active: isActive("/admin/dashboard"),
          })}
        >
          <Link to="/admin/dashboard">
            <FontAwesomeIcon icon={faChartLine} />
            <span className={cx("item-text")}>Dashboard</span>
          </Link>
        </Container>
        <Container
          className={cx("menu-item", {
            active: isActive("/admin/users"),
          })}
        >
          <Link to="/admin/users">
            <FontAwesomeIcon icon={faUsers} />
            <span className={cx("item-text")}>Users</span>
          </Link>
        </Container>
        <Container
          className={cx("menu-item", {
            active: isActive("/admin/products"),
          })}
        >
          <Link to="/admin/products">
            <FontAwesomeIcon icon={faDragon} />
            <span className={cx("item-text")}>Products</span>
          </Link>
        </Container>
        <Container
          className={cx("menu-item", {
            active: isActive("/admin/orders"),
          })}
        >
          <Link to="/admin/orders">
            <FontAwesomeIcon icon={faReceipt} />
            <span className={cx("item-text")}>Orders</span>
          </Link>
        </Container>
      </Container>
    </div>
  );
}

export default Menu;
