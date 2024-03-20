import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faPen } from "@fortawesome/free-solid-svg-icons";
import { handleCheckItem, handleCheckAll } from "~/functions/eventHandlers";
import classNames from "classnames/bind";
import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

const Table = ({
  items,
  columns,
  checkedItems,
  setCheckedItems,
  handleEditItem,
  handleDeleteItem,
  isEditing,
  renderItemField,
}) => {
  return (
    <Container className={cx("container")}>
      <table className={cx("table")}>
        <thead>
          <tr className={cx("header-row")}>
            <th className={cx("header-col")} scope="col">
              <input
                className={cx("header-checkbox")}
                type="checkbox"
                onChange={(e) =>
                  handleCheckAll(e.target.checked, setCheckedItems, items)
                }
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
                  onChange={(e) =>
                    handleCheckItem(item.ID, e.target.checked, setCheckedItems)
                  }
                  checked={checkedItems.includes(item.ID)}
                />
              </td>
              {Object.keys(item).map((field) => (
                <td className={cx("product-col")} key={field}>
                  {renderItemField(item, field)}
                </td>
              ))}
              <td className={cx("product-col")}>
                {isEditing && item.ID === itemID ? (
                  <button
                    type="submit"
                    className={cx("btn-save")}
                    onClick={() => handleSaveEdit(item)}
                  >
                    Save
                  </button>
                ) : (
                  <Container className={cx("edit-icon")}>
                    <FontAwesomeIcon
                      icon={faPen}
                      onClick={() => handleEditItem(item.ID)}
                    />
                  </Container>
                )}
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
