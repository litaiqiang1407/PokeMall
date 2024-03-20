import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPen } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

const Table = ({
  columns,
  items,
  checkedItems,
  handleCheckItem,
  handleEditItem,
  handleDeleteItem,
}) => {
  return (
    <table className={cx("table")}>
      <thead>
        <tr className={cx("header-row")}>
          {/* Render table headers */}
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
        {/* Render table rows */}
        {items.map((item) => (
          <tr className={cx("product-row")} key={item.ID}>
            {/* Render table cells */}
            <td className={cx("product-col")}>
              {/* Render checkbox for each item */}
              <input
                className={cx("product-checkbox")}
                type="checkbox"
                onChange={(e) => handleCheckItem(item.ID, e.target.checked)}
                checked={checkedItems.includes(item.ID)}
              />
            </td>
            {/* Render other table cells based on item properties */}
            {/* Example: <td className={cx("product-col")}>{item.ID}</td> */}
            <td className={cx("product-col")}>{/* Example: {item.Name} */}</td>
            {/* Render Edit and Delete icons */}
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
  );
};

export default Table;
