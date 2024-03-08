import { useState, useEffect } from "react";

import { Container, Button } from "react-bootstrap";

import { interactData } from "~/functions/interactData";
import LoadingAnimation from "~/components/LoadingAnimation";
import {
  handleDecrease,
  handleIncrease,
  handleQuantityChange,
} from "~/functions/eventHandlers"; // Custom functions

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ShoppingCart.module.scss"; // CSS Module

const cx = classNames.bind(styles); // CSS Module

function ShoppingCart() {
  const [userData, setUserData] = useState({ id: "" });
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    // Fetch user data from localStorage on component mount
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  // Get customerId from userData
  const { id: customerId } = userData;

  useEffect(() => {
    // Fetch cart items from the server on component mount
    interactData(
      `http://localhost/pokemall/api/ShoppingCart.php?customerId=${customerId}`,
      "GET",
      null,
      (data) => {
        // Lưu số lượng cho từng mục vào state
        const quantities = {};
        data.forEach((item) => {
          quantities[item.ID] = item.Quantity;
        });
        setItemQuantities(quantities);
        setCartItems(data);
      }
    );
  }, [customerId]);

  const handleCheckItem = (itemId) => {
    const updatedCheckedItems = {
      ...checkedItems,
      [itemId]: !checkedItems[itemId],
    };
    setCheckedItems(updatedCheckedItems);
  };

  const handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    const updatedCheckedItems = {};

    // Lặp qua danh sách sản phẩm và đặt trạng thái isChecked cho mỗi sản phẩm
    cartItems.forEach((item) => {
      updatedCheckedItems[item.ID] = isChecked;
    });

    setCheckedItems(updatedCheckedItems);
  };

  const totalAmount = parseFloat(
    cartItems
      .filter((item) => checkedItems[item.ID])
      .reduce((total, item) => total + item.TotalAmount, 0)
  ).toFixed(2);

  const handleDeleteItem = (itemId) => {
    // Xóa khỏi cartItems và cập nhật lại state
    const updatedCartItems = cartItems.filter((item) => item.ID !== itemId);
    setCartItems(updatedCartItems);
    // Xóa số lượng của mục đó khỏi state
    const { [itemId]: _, ...updatedQuantities } = itemQuantities;
    setItemQuantities(updatedQuantities);
  };

  const handleDecrease = (itemId, currentQuantity, handleQuantityChange) => {
    const newQuantity = currentQuantity > 0 ? currentQuantity - 1 : 0;
    handleQuantityChange(itemId, newQuantity);
  };

  const handleIncrease = (itemId, currentQuantity, handleQuantityChange) => {
    const newQuantity = currentQuantity + 1;
    handleQuantityChange(itemId, newQuantity);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    // Cập nhật state số lượng cho mục đó
    setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
  };

  if (!cartItems.length) {
    return <LoadingAnimation />;
  }

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Container>
        <Container className={cx("cart-header")}>
          <FontAwesomeIcon icon={faShoppingCart} className={cx("cart-icon")} />
          <span className={cx("header-title")}>CART</span>
        </Container>
        <Container className={cx("cart-content")}>
          <table className={cx("table")}>
            <thead>
              <tr className={cx("header-row")}>
                <th className={cx("header-col")} scope="col">
                  <input
                    className={cx("header-checkbox")}
                    type="checkbox"
                    onChange={handleCheckAll}
                  />
                </th>
                <th className={cx("header-col")} scope="col">
                  Product
                </th>
                <th className={cx("header-col")} scope="col">
                  Size
                </th>
                <th className={cx("header-col")} scope="col">
                  Unit Price
                </th>
                <th className={cx("header-col")} scope="col">
                  Quantity
                </th>
                <th className={cx("header-col")} scope="col">
                  Total Amount
                </th>
                <th className={cx("header-col")} scope="col">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr className={cx("product-row")} key={item.ID}>
                  <td className={cx("product-col")}>
                    <input
                      className={cx("product-checkbox")}
                      type="checkbox"
                      checked={item.isChecked}
                      onChange={() => handleCheckItem(item.ID)}
                    />
                  </td>
                  <td className={cx("product-col")}>
                    <div className={cx("product")}>
                      <img
                        src={item.ImageURL}
                        alt={item.FigureName}
                        className={cx("product-img")}
                      />
                      <span className={cx("product-name")}>
                        {item.FigureName}
                      </span>
                    </div>
                  </td>
                  <td className={cx("product-col")}>
                    <span className={cx("size")}>{item.SizeName}</span>
                  </td>
                  <td className={cx("product-col")}>
                    <span className={cx("price")}>${item.UnitPrice}</span>
                  </td>
                  <td className={cx("product-col")}>
                    <Container className={cx("quantity-select")}>
                      <Button
                        className={cx("decrease")}
                        onClick={() =>
                          handleDecrease(
                            item.ID,
                            itemQuantities[item.ID],
                            handleQuantityChange
                          )
                        }
                      >
                        -
                      </Button>
                      <input
                        type="text"
                        value={itemQuantities[item.ID]}
                        onChange={(event) =>
                          handleQuantityChange(item.ID, event.target.value)
                        }
                        className={cx("quantity-input")}
                      />
                      <Button
                        className={cx("increase")}
                        onClick={() =>
                          handleIncrease(
                            item.ID,
                            itemQuantities[item.ID],
                            handleQuantityChange
                          )
                        }
                      >
                        +
                      </Button>
                    </Container>
                  </td>
                  <td className={cx("product-col")}>
                    <span className={cx("total-amount")}>
                      {" "}
                      ${item.TotalAmount}
                    </span>
                  </td>
                  <td className={cx("product-col")}>
                    <Container className={cx("minus-icon")}>
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
        <Container className={cx("cart-footer")}>
          <Container className={cx("footer-left")}>
            <input
              className={cx("footer-checkbox")}
              type="checkbox"
              onChange={handleCheckAll}
            />

            <span className={cx("select-all")}>Select All</span>
            <Button className={cx("delete-all")}>Delete</Button>
          </Container>
          <Container className={cx("footer-right")}>
            <span className={cx("total-price")}>Total: </span>
            <span className={cx("total-amount")}>
              ${totalSelectedAmount || 0}
            </span>
            <Button className={cx("checkout")}>Checkout</Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default ShoppingCart;
