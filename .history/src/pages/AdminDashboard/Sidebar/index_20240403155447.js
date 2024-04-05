import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faDragon,
  faReceipt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);

function Sidebar({ item }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getItem = (name) => {
    item(name);
  };

  const menuItems = [
    {
      icon: faChartLine,
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: faUsers,
      name: "Users",
      path: "/admin/users",
    },
    {
      icon: faDragon,
      name: "Products",
      path: "/admin/products",
    },
    {
      icon: faReceipt,
      name: "Orders",
      path: "/admin/orders",
    },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <Link
        key={index}
        to={item.path}
        className={cx("menu-item", {
          active: isActive(item.path),
        })}
      >
        {isActive(item.path) && setActiveMenu(item.name)}
        <FontAwesomeIcon icon={item.icon} className={cx("item-icon")} />
        <span className={cx("item-name")}>{item.name}</span>
      </Link>
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
