import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { ordersURL, productsURL, usersURL } from "~/data";
import { interactData } from "~/functions/interactData";

import classNames from "classnames/bind";
import styles from "./AddItem.module.scss";
const cx = classNames.bind(styles);

function AddItem() {
  const { management, item } = useParams();
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
  console.table(columns);

  return (
    <div className={cx("add-item")}>
      <div className={cx("header")}>
        <div className={cx("header-title")}>
          <span className={cx("title")}>Add {item}</span>
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
              <Form.Group
                key={index}
                className={cx("input")}
                controlId={column}
              >
                <Form.Label className={cx("form-label")}>{column}</Form.Label>
                <Form.Control
                  name={column}
                  type="text"
                  placeholder={`Enter ${column}`}
                  className={cx("form-control")}
                ></Form.Control>
              </Form.Group>
            );
          })}
        </Form>
      </div>
    </div>
  );
}

export default AddItem;