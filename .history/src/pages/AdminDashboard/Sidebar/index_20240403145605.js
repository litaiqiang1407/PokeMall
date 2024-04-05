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

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <Container
        key={index}
        className={cx("menu-item", {
          active: isActive(item.path),
        })}
      >
        <Link to={item.path}>
          <FontAwesomeIcon icon={item.icon} />
          <span className={cx("item-text")}>{item.text}</span>
        </Link>
      </Container>
    ));
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
      <div className={cx("content")}>{renderMenuItems()}</div>
    </div>
  );
}

export default Sidebar;
