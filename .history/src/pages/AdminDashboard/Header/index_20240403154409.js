import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon
            className={cx("icon-search")}
            icon={faMagnifyingGlass}
          />
        </div>
        <div className={cx("header-setting")}>
          <FontAwesomeIcon className={cx("icon-setting")} icon={faXmark} />
        </div>
      </div>
    </div>
  );
}

export default Header;
