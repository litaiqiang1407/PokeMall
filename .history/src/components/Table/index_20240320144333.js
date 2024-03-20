import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPen } from "@fortawesome/free-solid-svg-icons";

import { handleCheckAll } from "~/functions/eventHandlers";

import classNames from "classnames/bind";
import styles from "./Table.module.scss";
const cx = classNames.bind(styles);

const Table = ({
  columns,
  data,
  renderField,
  handleEditItem,
  handleDeleteItem,
}) => {
  return (
    <Container className={cx("content")}>
      <table className={cx("table")}>
        <thead>
          <tr className={cx("header-row")}>
            <th className={cx("header-col")} scope="col">
              <input
                className={cx("header-checkbox")}
                type="checkbox"
                onChange={(e) => {
                  handleCheckAll(e.target.checked, setCheckedItems, orderItems);
                }}
                checked={checkedItems.length === orderItems.length}
              />
            </th>
            {columns.map((column) => (
              <th className={cx("header-col")} scope="col" key={column}>
                {column}
              </th>
            ))}
            <th className={cx("header-col")} scope="col">
              Edit
            </th>
            <th className={cx("header-col")} scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className={cx("product-row")} key={item.ID}>
              {Object.keys(item).map((field) => (
                <td className={cx("product-col")} key={`${item.ID}-${field}`}>
                  {renderField(item, field)}
                </td>
              ))}
              <td className={cx("product-col")}>
                <Container className={cx("edit-icon")}>
                  <FontAwesomeIcon
                    icon={faPen}
                    onClick={() => handleEditItem(item.ID)}
                  />
                </Container>
              </td>
              <td className={cx("product-col")}>
                <Container className={cx("delete-icon")}>
                  <FontAwesomeIcon
                    icon={faCircleMinus}
                    onClick={() => handleDeleteItem(item.ID)}
                  />
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
