import { useState, useEffect, useCallback } from "react";
import { Toaster } from "react-hot-toast";
import { Container, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

import { interactData } from "~/functions/interactData";
import LoadingAnimation from "~/components/LoadingAnimation";
import {
  handleResponse,
  handleDecrease,
  handleIncrease,
  handleCheckItem,
  handleCheckAll,
} from "~/functions/eventHandlers";
import Title from "~/components/Title";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ShoppingCart.module.scss"; // CSS Module
import { deleteFromCartURL, priceURL, shoppingCartURL } from "~/data";
const cx = classNames.bind(styles); // CSS Module

function ShoppingCart() {
  const [userData, setUserData] = useState({ id: "" });
  const [cartItems, setCartItems] = useState([]);
  const [itemID, setItemID] = useState(0);
  const [itemSizeName, setItemSizeName] = useState("");
  const [itemQuantities, setItemQuantities] = useState({});
  const [itemSizes, setItemSizes] = useState({});
  const [sizes, setSizes] = useState([]);
  const [itemSizePrice, setItemSizePrice] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const customerID = userData.id;

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }

    if (cartItems.length === 0) {
      interactData(
        `${shoppingCartURL}?customerID=${customerID}`,
        "GET",
        null,
        (data) => {
          console.log(data);
          if (data && data.cartItems) {
            const quantities = {};
            data.cartItems.forEach((item) => {
              quantities[item.ID] = item.Quantity;
            });
            setCartItems(data.cartItems);
            setSizes(data.sizes);
            setItemQuantities(quantities);
            setLoading(false);
          } else {
            console.error("Invalid data received:", data);
            setLoading(false);
          }
        }
      );
    }
  }, [customerID, cartItems]);

  // const handleCheckAll = (e) => {
  //   if (e.target.checked) {
  //     const allItemIds = cartItems.map((item) => item.ID);
  //     setCheckedItems([...allItemIds]);
  //   } else {
  //     setCheckedItems([]);
  //   }
  // };

  const totalCheckedAmount = cartItems.reduce((total, item) => {
    if (checkedItems.includes(item.ID)) {
      return total + item.Price * itemQuantities[item.ID];
    }
    return total;
  }, 0);

  const handleDeleteItem = (itemID) => {
    interactData(
      `${deleteFromCartURL}?productID=${itemID}`,
      "DELETE",
      null,
      () => {
        const newCartItems = cartItems.filter((item) => item.ID !== itemID);
        setCartItems(newCartItems);
        handleResponse("Product has been deleted", "Delete");
      }
    );
  };

  const handleDeleteAllCheckedItems = () => {
    checkedItems.forEach((itemID) => {
      handleDeleteItem(itemID);
    });
    setCheckedItems([]);
  };

  const handleQuantityChange = (newQuantity, itemID) => {
    setItemQuantities({ ...itemQuantities, [itemID]: newQuantity });

    const updatedCartItems = cartItems.map((item) => {
      if (item.ID === itemID) {
        const updatedItem = {
          ...item,
          Quantity: newQuantity,
          TotalAmount: parseFloat(item.Price * newQuantity).toFixed(2),
        };
        return updatedItem;
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    if (itemID && itemSizeName) {
      interactData(
        `${priceURL}?itemID=${itemID}&sizeName=${itemSizeName}`,
        "GET",
        null,
        (newPrices) => {
          if (newPrices && newPrices[0] && newPrices[0].Price !== undefined) {
            setItemSizePrice({
              ...itemSizePrice,
              [itemID]: newPrices[0].Price,
            });

            const updatedCartItems = cartItems.map((item) => {
              if (item.ID === itemID) {
                const updatedItem = {
                  ...item,
                  Price: newPrices[0].Price,
                  TotalAmount: parseFloat(
                    newPrices[0].Price * itemQuantities[item.ID]
                  ).toFixed(2),
                };
                return updatedItem;
              }
              return item;
            });
            setCartItems(updatedCartItems);
          } else {
            console.error("Invalid response from server:", newPrices);
          }
        }
      );
    }
  }, [itemID, itemSizeName]);

  const handleSizeChange = (itemID, newSize) => {
    setItemSizes({ ...itemSizes, [itemID]: newSize });
    setItemID(itemID);
    setItemSizeName(newSize);
  };

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      <Title title="Shopping Cart - PokeMall" />
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
                    onChange={(e) =>
                      handleCheckAll(
                        e.target.checked,
                        setCheckedItems,
                        cartItems
                      )
                    }
                    checked={checkedItems.length === cartItems.length}
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
                    <div className={cx("product")}>
                      <Link to={`/product-detail/${item.FigureID}`}>
                        <img
                          src={item.ImageURL}
                          alt={item.FigureName}
                          className={cx("product-img")}
                        />
                        <span className={cx("product-name")}>
                          {item.FigureName}
                        </span>
                      </Link>
                    </div>
                  </td>
                  <td className={cx("product-col")}>
                    <Dropdown className={cx("size")}>
                      <Dropdown.Toggle className={cx("size-select")}>
                        {itemSizes[item.ID] || item.SizeName}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className={cx("size-option")}>
                        {sizes.map((size) => (
                          <Dropdown.Item
                            key={size.ID}
                            onClick={() =>
                              handleSizeChange(item.ID, size.SizeName)
                            }
                          >
                            {size.SizeName}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td className={cx("product-col")}>
                    <span className={cx("price")}>${item.Price}</span>
                  </td>
                  <td className={cx("product-col")}>
                    <Container className={cx("quantity-select")}>
                      <Button
                        className={cx("decrease")}
                        onClick={() =>
                          handleDecrease(
                            itemQuantities[item.ID],
                            handleQuantityChange,
                            item.ID
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
                            itemQuantities[item.ID],
                            handleQuantityChange,
                            item.ID
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
              onChange={(e) => {
                handleCheckAll(e.target.checked, setCheckedItems, cartItems);
              }}
              checked={checkedItems.length === cartItems.length}
            />

            <span className={cx("select-all")}>Select All</span>
            <Button
              className={cx("delete-all")}
              onClick={handleDeleteAllCheckedItems}
            >
              Delete
            </Button>
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
      <Toaster />
    </Container>
  );
}

export default ShoppingCart;
