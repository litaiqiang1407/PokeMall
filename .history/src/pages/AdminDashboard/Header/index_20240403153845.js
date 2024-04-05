import { useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header({ item }) {
  const headerTitle = item;
  return (
    <div className={cx("header")}>
      <div className={cx("header-title")}>{headerTitle}</div>
      <div className={cx("header-options")}></div>
    </div>
  );
}

export default Header;
