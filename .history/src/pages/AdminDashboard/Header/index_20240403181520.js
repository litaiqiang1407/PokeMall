import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {
  faBell,
  faGear,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header({ item }) {
  return (
    <div className={cx("header")}>
      <div className={cx("header-title")}>
        <FontAwesomeIcon className={cx("title-icon")} icon={item.icon} />
        <span className={cx("title-content")}>{item.name}</span>
      </div>
      <div className={cx("header-options")}>
        <div className={cx("header-search")}>
          <input
            className={cx("search-input")}
            placeholder="Search for anything..."
          />
          <FontAwesomeIcon
            className={cx("search-icon")}
            icon={faMagnifyingGlass}
          />
        </div>
        <div className={cx("header-option")}>
          <FontAwesomeIcon className={cx("option-icon")} icon={faGear} />
        </div>
        <div className={cx("header-option")}>
          <FontAwesomeIcon className={cx("option-icon")} icon={faBell} />
        </div>
        <div className={cx("header-avatar")}></div>
      </div>
    </div>
  );
}

export default Header;
