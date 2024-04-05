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

function Sidebar() {
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
      <div className={cx("content")}></div>
    </div>
  );
}

export default Sidebar;
