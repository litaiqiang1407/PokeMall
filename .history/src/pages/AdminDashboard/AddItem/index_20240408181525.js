import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./AddItem.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function AddItem() {
  return (
    <div className={cx("add-item")}>
      <div className={cx("header")}>
        <div className={cx("header-title")}>
          <span className={cx("title")}>Add Item</span>
        </div>
        <div className={cx("header-action")}>
          <Link to={"/admin/users"} className={cx("btn-view")}>
            <FontAwesomeIcon icon={faEye} className={cx("icon-view")} />
            {"    "}View Items
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
