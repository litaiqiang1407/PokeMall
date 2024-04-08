import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";

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
          {columns
            .reduce((acc, column, index) => {
              if (index % 2 === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(column);
              return acc;
            }, [])
            .map((pair, rowIndex) => (
              <Row key={rowIndex}>
                {pair.map((column, colIndex) => (
                  <Col lg={6} key={colIndex}>
                    <Form.Group controlId={column} className={cx("form-field")}>
                      <Form.Label className={cx("form-label")}>
                        {column}
                      </Form.Label>
                      <Form.Control
                        name={column}
                        type="text"
                        placeholder={`Enter ${column}`}
                        className={cx("form-control")}
                      />
                    </Form.Group>
                  </Col>
                ))}
              </Row>
            ))}
        </Form>
      </div>
    </div>
  );
}

export default AddItem;
