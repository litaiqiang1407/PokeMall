import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { usersURL } from "~/data";
import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./AddItem.module.scss";
const cx = classNames.bind(styles);

function AddItem() {
  const { management } = useParams();
  const [columns, setColumns] = useState([]);

  const columnsURL = `${management}URL`;

  useEffect(() => {
    interactData(columnsURL, "GET", null, (data) => {
      setColumns(data.columns);
    });
  }, [columnsURL]);
  console.log(usersURL);
  console.log(management);
  console.log(columns);

  return (
    <div className={cx("add-item")}>
      <div className={cx("header")}>
        <div className={cx("header-title")}>
          <span className={cx("title")}>Add Item</span>
        </div>
        <div className={cx("header-action")}>
          <Link to={"/admin/users"} className={cx("btn-view")}>
            <FontAwesomeIcon icon={faEye} className={cx("icon-view")} />
            <span className={cx("btn-content")}>View Items</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
