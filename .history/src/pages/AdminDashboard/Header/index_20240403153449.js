import { useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header({ item }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return <div className={cx("header")}>item</div>;
}

export default Header;
