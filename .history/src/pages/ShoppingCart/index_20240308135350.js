import { useState, useEffect } from "react";

import { Container, Button } from "react-bootstrap";

import { interactData } from "~/functions/interactData";
import LoadingAnimation from "~/components/LoadingAnimation";

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
  const [sizeOptions, setSizeOptions] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const { id: customerId } = userData;

  useEffect(() => {
    interactData(
      `http://localhost/pokemall/api/ShoppingCart.php?customerId=${customerId}`,
      "GET",
      null,
      (data) => {
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
    interactData(
      "http://localhost/pokemall/api/Size.php",
      "GET",
      null,
      setSizeOptions
    );
  });

  const handleCheckItem = (itemId, isChecked) => {
    if (isChecked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, itemId]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((id) => id !== itemId)
      );
    }
  };

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      const allItemIds = cartItems.map((item) => item.ID);
      setCheckedItems([...allItemIds]);
    } else {
      setCheckedItems([]);
    }
  };

  const totalCheckedAmount = cartItems.reduce((total, item) => {
    if (checkedItems.includes(item.ID)) {
      return total + item.UnitPrice * itemQuantities[item.ID];
    }
    return total;
  }, 0);

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.ID !== itemId);
    setCartItems(updatedCartItems);
    const { [itemId]: _, ...updatedQuantities } = itemQuantities;
    setItemQuantities(updatedQuantities);
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.filter((id) => id !== itemId)
    );
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
    setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
  };

  const handleSizeChange = (itemId, newSize) => {
    setSelectedSizes({ ...selectedSizes, [itemId]: newSize });
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
                      onChange={(e) =>
                        handleCheckItem(item.ID, e.target.checked)
                      }
                      checked={checkedItems.includes(item.ID)}
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
                    <select
                      className={cx("size-dropdown")}
                      value={selectedSizes[item.ID] || item.SizeName} // Giá trị mặc định là size hiện tại của sản phẩm
                      onChange={(e) =>
                        handleSizeChange(item.ID, e.target.value)
                      }
                    >
                      {item.availableSizes.map((size) => (
                        <option key={size.id} value={size.name}>
                          {size.name}
                        </option>
                      ))}
                    </select>
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
              checked={checkedItems.length === cartItems.length}
            />

            <span className={cx("select-all")}>Select All</span>
            <Button className={cx("delete-all")}>Delete</Button>
          </Container>
          <Container className={cx("footer-right")}>
            <span className={cx("total-price")}>Total: </span>
            <span className={cx("total-amount")}>
              ${parseFloat(totalCheckedAmount).toFixed(2)}
            </span>
            <Button className={cx("checkout")}>Checkout</Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default ShoppingCart;
