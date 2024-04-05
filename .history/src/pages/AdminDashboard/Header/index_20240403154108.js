import { useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header({ item }) {
  const headerTitle = item;
  return (
    <div className={cx("header")}>
      <div className={cx("header-title")}>{headerTitle}</div>
      <div className={cx("header-options")}>
        <div className={cx("header-search")}>
          <input
            className={cx("search-input")}
            placeholder="Search for anything..."
          />
          <FontAwesomeIcon icon={faXmark} className={cx("clear-search")} />
          <button className={cx("btn-search")}>
            <FontAwesomeIcon
              className={cx("icon-search")}
              icon={faMagnifyingGlass}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
