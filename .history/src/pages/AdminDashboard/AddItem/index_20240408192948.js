import { useEffect, useState } from "react";
import { useParams, useLocation, Form } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { ordersURL, productsURL, usersURL } from "~/data";
import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./AddItem.module.scss";
const cx = classNames.bind(styles);

function AddItem() {
  const { management } = useParams();
  const [columns, setColumns] = useState([]);

  let columnsURL = "";
  switch (management) {
    case "users":
      columnsURL = usersURL;
      break;
    case "products":
      columnsURL = productsURL;
      break;
    case "orders":
      columnsURL = ordersURL;
      break;
    default:
      break;
  }

  useEffect(() => {
    interactData(columnsURL, "GET", null, (data) => {
      setColumns(data.columns);
    });
  }, []);

  return (
    <div className={cx("add-item")}>
      <div className={cx("header")}>
        <div className={cx("header-title")}>
          <span className={cx("title")}>Add {management}</span>
        </div>
        <div className={cx("header-action")}>
          <Link to={"/admin/users"} className={cx("btn-view")}>
            <FontAwesomeIcon icon={faEye} className={cx("icon-view")} />
            <span className={cx("btn-content")}>View {management}</span>
          </Link>
        </div>
      </div>
      <div className={cx("content")}>
        <Form className={cx("form")}>
          {columns.map((column, index) => {
            return (
              <div key={index} className={cx("input")}>
                <label className={cx("label")}>{column}</label>
                <input className={cx("input-field")} />
              </div>
            );
          })}
          <button className={cx("btn-submit")}>Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default AddItem;
