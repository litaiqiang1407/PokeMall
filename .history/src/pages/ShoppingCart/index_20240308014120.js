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
import { faShoppingCart, faMinus } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ShoppingCart.module.scss"; // CSS Module

const cx = classNames.bind(styles); // CSS Module

function ShoppingCart() {
  const [userData, setUserData] = useState({
    id: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  // Get customerId from localStorage
  const customerId = userData.id;

  const url = `http://localhost/pokemall/api/ShoppingCart.php?customerId=${customerId}`;

  // Function to fetch cart items from backend
  useEffect(() => {
    interactData(url, "GET", null, setCartItems);
  }, []); // Empty dependency array to ensure this effect runs only once

  // Function to handle checkbox toggle
  const handleCheckAll = () => {
    // Implement checkbox functionality here
  };

  // Function to handle deleting an item from cart
  const handleDeleteItem = (itemId) => {
    // Implement item deletion functionality here
  };

  if (!cartItems) {
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
                  <td className={cx("product-col")}>{item.SizeName}</td>
                  <td className={cx("product-col")}>{item.UnitPrice}</td>
                  <td className={cx("product-col")}>
                    <Container className={cx("quantity-select")}>
                      <Button
                        className={cx("decrease")}
                        onClick={() => handleDecrease(quantity, setQuantity)}
                      >
                        -
                      </Button>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(event) =>
                          handleQuantityChange(event, setQuantity)
                        }
                        className={cx("quantity-input")}
                      />
                      <Button
                        className={cx("increase")}
                        onClick={() => handleIncrease(quantity, setQuantity)}
                      >
                        +
                      </Button>
                    </Container>
                  </td>
                  <td className={cx("product-col")}>
                    {item.UnitPrice * item.Quantity}
                  </td>
                  <td className={cx("product-col")}>
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleDeleteItem(item.ID)}
                    />
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
