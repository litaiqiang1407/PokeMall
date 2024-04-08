import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./AddItem.module.scss";
const cx = classNames.bind(styles);

function AddItem() {
  return (
    <div className={cx("add-item")}>
      <div className={cx("header")}>
        <div className={cx("header-title")}>
          <span>Add Item</span>
        </div>
        <div className={cx("header-action")}>
          <button className={cx("btn-view")}>
            <FontAwesomeIcon icon={faEye} className={cx("icon-view")} />
            {"    "}View Items
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
