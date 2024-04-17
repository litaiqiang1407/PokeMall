import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { Toaster } from "react-hot-toast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faImage } from "@fortawesome/free-solid-svg-icons";

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
  const navigate = useNavigate();
  const inputRef = useRef(null);

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
      data.columnsForAdd = data.columnsForAdd.filter(
        (column) => column !== "ID"
      );
      setColumns(data.columnsForAdd);
    });
  }, [columnsURL]);

  console.log(values);
  const formData = new FormData();
  Object.keys(values).forEach((key) => {
    formData.append(key, values[key]);
  });
  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  const handleAddItem = (e) => {
    e.preventDefault();

    Object.keys(values).forEach((key) => {
      values[key.toLowerCase()] = values[key];
      delete values[key];
    });

    const fields = columns.map((column) => ({
      name: column.toLowerCase(),
      value: values[column.toLowerCase()],
    }));

    const isValid = isValidation(fields, (errors) => {
      setErrors(errors || {});
    });

    if (isValid) {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      interactData(addURL, "POST", values, (data) => {
        columns.forEach((column) => {
          if (data.message === `${column.toLowerCase()} already exists`) {
            setExistError({
              [column.toLowerCase()]: errorMessages[column.toLowerCase()].exist,
            });
          }
        });
        handleResponse(`Added ${management.slice(0, -1)} ${values.name}`);
        setTimeout(() => {
          navigate(`/admin/${management}`);
        }, 1000);
      });
    }
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
                      {column === "Image" ? (
                        <div>
                          <img
                            src={
                              values[column]
                                ? URL.createObjectURL(values[column])
                                : "https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
                            }
                            alt="item"
                            className={cx("item-image")}
                            onClick={() => inputRef.current.click()}
                          />
                          {/* <FontAwesomeIcon
                            icon={faImage}
                            className={cx("change-icon")}
                           
                          /> */}
                          <Form.Control
                            name={column}
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            ref={inputRef}
                            className={cx("form-input__file", {
                              error:
                                errors[column.toLowerCase()] ||
                                existError[column.toLowerCase()],
                            })}
                            onChange={(e) =>
                              setValues({
                                ...values,
                                [column]: e.target.files[0],
                              })
                            }
                          />
                        </div>
                      ) : (
                        <Form.Control
                          name={column}
                          type="text"
                          className={cx("form-input", {
                            error:
                              errors[column.toLowerCase()] ||
                              existError[column.toLowerCase()],
                          })}
                          value={values[column] || ""}
                          onChange={(e) =>
                            setValues({ ...values, [column]: e.target.value })
                          }
                        />
                      )}
                      {(errors[column.toLowerCase()] ||
                        existError[column.toLowerCase()]) && (
                        <span className={cx("error-message")}>
                          {errors[column.toLowerCase()] ||
                            existError[column.toLowerCase()]}
                        </span>
                      )}
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
      <Toaster />
    </div>
  );
}

export default AddItem;
