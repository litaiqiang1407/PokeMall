import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { addUserURL, ordersURL, productsURL, usersURL } from "~/data";
import { interactData } from "~/functions/interactData";
import { errorMessages, isValidation } from "~/functions/validation";

import classNames from "classnames/bind";
import styles from "./AddItem.module.scss";
import { handleResponse } from "~/functions/eventHandlers";
const cx = classNames.bind(styles);

function AddItem() {
  const { management } = useParams();
  const [columns, setColumns] = useState([]);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [existError, setExistError] = useState("");

  let columnsURL = "";
  let addURL = "";
  switch (management) {
    case "users":
      columnsURL = usersURL;
      addURL = addUserURL;
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
      data.columns = data.columns.filter((column) => column !== "ID");
      setColumns(data.columns);
    });
  }, []);

  const handleAddItem = (e) => {
    e.preventDefault();

    Object.keys(values).forEach((key) => {
      values[key.toLowerCase()] = values[key];
      delete values[key];
    });

    const fields = Object.keys(values).map((name) => ({
      name,
      value: values[name],
    }));

    const isValid = isValidation(fields, (errors) => {
      setErrors(errors[fields.name] || "");
    });

    if (isValid) {
      interactData(addURL, "POST", fields, (data) => {
        handleResponse(`Added ${management.slice(0, -1)}`);
        setValues({});
        console.log(data);
      });
    }

    console.log(fields);
    console.log(isValid);
  };

  return (
    <div className={cx("add-item")}>
      <div className={cx("header")}>
        <div className={cx("header-title")}>
          <span className={cx("title")}>Add {management.slice(0, -1)}</span>
        </div>
        <div className={cx("header-action")}>
          <Link to={`/admin/${management}`} className={cx("btn-view")}>
            <FontAwesomeIcon icon={faEye} className={cx("icon-view")} />
            <span className={cx("btn-content")}>View {management}</span>
          </Link>
        </div>
      </div>
      <div className={cx("content")}>
        <Form onSubmit={handleAddItem} className={cx("form")}>
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
                  <Col lg={6} key={colIndex} className={cx("col")}>
                    <Form.Group controlId={column} className={cx("form-field")}>
                      <Form.Label className={cx("form-label")}>
                        {column}
                      </Form.Label>
                      <Form.Control
                        name={column}
                        type="text"
                        className={cx("form-input", {
                          error: errors[column] || existError,
                        })}
                        value={values[column] || ""}
                        onChange={(e) =>
                          setValues({ ...values, [column]: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                ))}
              </Row>
            ))}
          <button type="submit" className={cx("btn-add")}>
            Add {management.slice(0, -1)}
          </button>
        </Form>
      </div>
    </div>
  );
}

export default AddItem;
