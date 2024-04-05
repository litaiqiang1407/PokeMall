import { Container, Navbar } from "react-bootstrap";
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

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      icon: faChartLine,
      text: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: faUsers,
      text: "Users",
      path: "/admin/users",
    },
    {
      icon: faDragon,
      text: "Products",
      path: "/admin/products",
    },
    {
      icon: faReceipt,
      text: "Orders",
      path: "/admin/orders",
    },
  ];

  const renderMenuItem = (icon, text, path) => {
    return (
      <Container
        className={cx("menu-item", {
          active: isActive(path),
        })}
      >
        <Link to={path}>
          <FontAwesomeIcon icon={icon} />
          <span className={cx("item-text")}>{text}</span>
        </Link>
      </Container>
    );
  };
  return (
    <div className={cx("sidebar")}>
      {/* Header */}
      <div className={cx("header")}>
        <Navbar.Brand href="/">
          <img
            src="../assets/img/logo.png"
            height={42}
            width={114.03}
            className={cx("logo")}
            alt="Logo"
          />
        </Navbar.Brand>
      </div>
      {/* Sidebar Content */}
      <div className={cx("content")}>
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
      </div>
    </div>
  );
}

export default Sidebar;
