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
import { Logo } from "~/components/Layouts/Components";
const cx = classNames.bind(styles);

function Sidebar({ item }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getItem = (name, icon) => {
    item(name, icon);
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
        onClick={() => getItem(item.name, item.icon)}
      >
        <FontAwesomeIcon icon={item.icon} className={cx("item-icon")} />
        <span className={cx("item-name")}>{item.name}</span>
      </Link>
    ));
  };
  return (
    <div className={cx("sidebar")}>
      {/* Header */}
      <div className={cx("header")}>
        <Logo />
      </div>
      {/* Sidebar Content */}
      <div className={cx("content")}>{renderMenuItems()}</div>
    </div>
  );
}

export default Sidebar;
