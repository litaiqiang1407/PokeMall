import { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Toaster } from "react-hot-toast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMagnifyingGlass,
  faPlus,
  faCircleMinus,
  faPen,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";

import { interactData } from "~/functions/interactData";
import {
  handleResponse,
  handleCheckItem,
  handleCheckAll,
} from "~/functions/eventHandlers";
import Title from "~/components/Title";
import LoadingAnimation from "~/components/LoadingAnimation";
import { ordersURL, updateAdminOrderURL } from "~/data";

import classNames from "classnames/bind";
import styles from "./Orders.module.scss";
const cx = classNames.bind(styles);

function Orders() {
  const [columns, setColumns] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [itemID, setItemID] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedValues, setEditedValues] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    interactData(ordersURL, "GET", null, (data) => {
      setOrderItems(data.orders);
      setColumns(data.columns);
      setLoading(false);
    });
  }, []);

  const handleEditItem = (itemID) => {
    setItemID(itemID);
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setEditedValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();

    const updateData = {
      ID: itemID,
      ...editedValues,
    };

    interactData(updateAdminOrderURL, "POST", updateData, (response) => {
      console.log(response);
      if (response.message === "Order information updated") {
        handleResponse("Order information updated");
      }
    });
    const updatedOrderItems = orderItems.map((item) => {
      if (item.ID === itemID) {
        return { ...item, ...editedValues };
      }
      return item;
    });
    setOrderItems(updatedOrderItems);
    setIsEditing(false);
    setEditedValues({});
  };

  const renderItemField = (item, field) =>
    isEditing && item.ID === itemID ? (
      <input
        className={cx(`input-${field}`)}
        value={editedValues[field] || item[field]}
        onChange={(e) => handleInputChange(e, field)}
      />
    ) : (
      <span className={cx(field)}>{item[field]}</span>
    );

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Container className={cx("container")}>
      <Title title={"Admin Orders - PokeMall"} />
      <Container className={cx("header")}>
        <Container>
          <FontAwesomeIcon icon={faReceipt} className={cx("header-icon")} />
          <span className={cx("header-title")}>Orders</span>
        </Container>
        <Container className={cx("header-right")}>
          <div className={cx("header-search")}>
            <input
              className={cx("search-input")}
              placeholder="Search for products..."
            />
            <FontAwesomeIcon icon={faXmark} className={cx("clear-search")} />
            <button className={cx("btn-search")}>
              <FontAwesomeIcon
                className={cx("icon-search")}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <Tippy content={"Add"}>
            <div className={cx("header-add")}>
              <button className={cx("btn-add")}>
                <FontAwesomeIcon icon={faPlus} className={cx("icon-add")} />
              </button>
            </div>
          </Tippy>
        </Container>
      </Container>
      <Container className={cx("content")}>
        <table className={cx("table")}>
          <thead>
            <tr className={cx("header-row")}>
              <th className={cx("header-col")} scope="col">
                <input
                  className={cx("header-checkbox")}
                  type="checkbox"
                  onChange={(e) => {
                    handleCheckAll(
                      e.target.checked,
                      setCheckedItems,
                      orderItems
                    );
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
            {orderItems.map((item) => (
              <tr className={cx("product-row")} key={item.ID}>
                <td className={cx("product-col")}>
                  <input
                    className={cx("product-checkbox")}
                    type="checkbox"
                    onChange={(e) =>
                      handleCheckItem(
                        item.ID,
                        e.target.checked,
                        setCheckedItems
                      )
                    }
                    checked={checkedItems.includes(item.ID)}
                  />
                </td>
                <td className={cx("product-col")}>
                  <span className={cx("id")}>{item.ID}</span>
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "Customer")}
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "Total")}
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "Address")}
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "Date")}
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "PaymentMethod")}
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "PaymentStatus")}
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "OrderStatus")}
                </td>
                <td className={cx("product-col")}>
                  {isEditing && item.ID === itemID ? (
                    <button
                      type="submit"
                      className={cx("btn-save")}
                      onClick={handleSaveEdit}
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
                      //onClick={() => handleDeleteItem(item.ID)}
                    />
                  </Container>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      <Toaster />
    </Container>
  );
}

export default Orders;
