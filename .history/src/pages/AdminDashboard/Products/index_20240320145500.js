import React from "react";
import { Container } from "react-bootstrap";

function Table({
  columns,
  items,
  checkedItems,
  handleCheckAll,
  handleCheckItem,
}) {
  return (
    <table className={cx("table")}>
      <thead>
        <tr className={cx("header-row")}>
          <th className={cx("header-col")} scope="col">
            <input
              className={cx("header-checkbox")}
              type="checkbox"
              onChange={(e) => handleCheckAll(e.target.checked)}
              checked={checkedItems.length === items.length}
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
        {items.map((item) => (
          <tr className={cx("product-row")} key={item.ID}>
            <td className={cx("product-col")}>
              <input
                className={cx("product-checkbox")}
                type="checkbox"
                onChange={(e) => handleCheckItem(item.ID, e.target.checked)}
                checked={checkedItems.includes(item.ID)}
              />
            </td>
            {/* Render other columns here */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
