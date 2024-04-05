import { useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header({ item }) {
  const headerTitle = item;
  return <div className={cx("header")}>{headerTitle}</div>;
}

export default Header;
