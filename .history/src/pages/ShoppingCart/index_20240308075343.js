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
  const [quantities, setQuantities] = useState({});

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

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      const userQuantityData = {};
      setQuantities(userQuantityData);
    }
  }, [userData]);

  const handleCheckAll = () => {
    // Implement checkbox functionality here
  };

  const handleDeleteItem = (itemId) => {
    // Implement item deletion functionality here
  };

  const handleDecrease = (itemId, quantities, setQuantities) => {
    const updatedQuantity = (quantities[itemId] || 0) - 1;
    if (updatedQuantity >= 0) {
      setQuantities({ ...quantities, [itemId]: updatedQuantity });
    }
  };

  const handleIncrease = (itemId, quantities, setQuantities) => {
    const updatedQuantity = (quantities[itemId] || 0) + 1;
    setQuantities({ ...quantities, [itemId]: updatedQuantity });
  };

  const handleQuantityChange = (event, itemId, quantities, setQuantities) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantities({ ...quantities, [itemId]: newQuantity });
    }
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
                    <input className={cx("product-checkbox")} type="checkbox" />
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
                          handleDecrease(item.ID, quantities, setQuantities)
                        }
                      >
                        -
                      </Button>
                      <input
                        type="text"
                        value={item.Quantity}
                        onChange={(event) =>
                          handleQuantityChange(
                            event,
                            item.ID,
                            quantities,
                            setQuantities
                          )
                        }
                        className={cx("quantity-input")}
                      />
                      <Button
                        className={cx("increase")}
                        onClick={() =>
                          handleIncrease(item.ID, quantities, setQuantities)
                        }
                      >
                        +
                      </Button>
                    </Container>
                  </td>
                  <td className={cx("product-col")}>
                    <span className={cx("total-amount")}>
                      {" "}
                      ${item.UnitPrice * item.Quantity}
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
      </Container>
    </Container>
  );
}

export default ShoppingCart;
