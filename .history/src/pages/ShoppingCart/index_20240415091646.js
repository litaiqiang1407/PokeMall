import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Container, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

import { interactData } from "~/functions/interactData";
import {
  handleDecrease,
  handleIncrease,
  handleCheckItem,
  handleCheckAll,
  handleDeleteItems,
} from "~/functions/eventHandlers";
import { LoadingAnimation, Title } from "~/components";
import { deleteFromCartURL, priceURL, shoppingCartURL } from "~/data";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ShoppingCart.module.scss"; // CSS Module
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

  const displayEmptyCartMessage = () => {
    return cartItems.length === 0
  };

  const totalCheckedAmount = cartItems.reduce((total, item) => {
    if (checkedItems.includes(item.ID)) {
      return total + item.Price * itemQuantities[item.ID];
    }
    return total;
  }, 0);

  const handleDeleteItem = (itemID) => {
    const deleteURL = `${deleteFromCartURL}?productID=${itemID}`;
    handleDeleteItems(itemID, setCartItems, cartItems, deleteURL);
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
            // You can also do a functional update 'setItemSizePrice(i => ...)'
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
  }, [itemID, itemSizeName, cartItems, itemQuantities, itemSizePrice]);

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
        {displayEmptyCartMessage() ? () : ()}
        </Container>      
    </Container>
  );
}

export default ShoppingCart;
