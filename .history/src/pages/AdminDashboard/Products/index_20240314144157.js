import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDragon,
  faXmark,
  faMagnifyingGlass,
  faPlus,
  faCircleMinus,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import Title from "~/components/Title";
import { interactData } from "~/functions/interactData";
import LoadingAnimation from "~/components/LoadingAnimation";

import classNames from "classnames/bind";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);

function Products() {
  const [productItems, setProductItems] = useState([]);
  const [itemID, setItemID] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [itemSizes, setItemSizes] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    interactData(
      "http://localhost/pokemall/api/Products.php",
      "GET",
      null,
      (data) => {
        console.log(data); // Log the data to see its structure
        setProductItems(data.products);
        setSizes(data.sizes);
      }
    );
  }, []);

  const handleSizeChange = useCallback((itemID, newSize) => {
    setItemSizes((prevItemSizes) => ({
      ...prevItemSizes,
      [itemID]: newSize,
    }));
    setItemID(itemID);
  }, []);

  const handleCheckItem = useCallback((itemId, isChecked) => {
    setCheckedItems((prevCheckedItems) =>
      isChecked
        ? [...prevCheckedItems, itemId]
        : prevCheckedItems.filter((id) => id !== itemId)
    );
  }, []);

  const handleCheckAll = useCallback(
    (e) => {
      const allItemIds = productItems.map((item) => item.ID);
      setCheckedItems(e.target.checked ? allItemIds : []);
    },
    [productItems]
  );

  const handleEditItem = useCallback((itemID) => {
    setItemID(itemID);
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }, []);

  const renderItemField = (item, field) =>
    isEditing && item.ID === itemID ? (
      <input
        className={cx(`input-${field}`)}
        value={item[field]}
        // Add onChange handlers if needed
      />
    ) : (
      <span className={cx(field)}>{item[field]}</span>
    );

  if (!productItems.length) {
    return <LoadingAnimation />;
  }

  return (
    <Container className={cx("container")}>
      <Title>Admin Products - PokeMall</Title>
      <Container className={cx("header")}>
        <Container>
          <FontAwesomeIcon icon={faDragon} className={cx("header-icon")} />
          <span className={cx("header-title")}>Products</span>
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
                  onChange={handleCheckAll}
                  checked={checkedItems.length === productItems.length}
                />
              </th>
              <th className={cx("header-col")} scope="col">
                ID
              </th>
              <th className={cx("header-col")} scope="col">
                Image
              </th>
              <th className={cx("header-col")} scope="col">
                Name
              </th>
              <th className={cx("header-col")} scope="col">
                Primary Type
              </th>
              <th className={cx("header-col")} scope="col">
                Size
              </th>
              <th className={cx("header-col")} scope="col">
                Price
              </th>
              <th className={cx("header-col")} scope="col">
                Quantity
              </th>
              <th className={cx("header-col")} scope="col">
                Release Date
              </th>
              <th className={cx("header-col")} scope="col">
                Edit
              </th>
              <th className={cx("header-col")} scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {productItems.map((item) => (
              <tr className={cx("product-row")} key={item.ID}>
                <td className={cx("product-col")}>
                  <input
                    className={cx("product-checkbox")}
                    type="checkbox"
                    onChange={(e) => handleCheckItem(item.ID, e.target.checked)}
                    checked={checkedItems.includes(item.ID)}
                  />
                </td>
                <td className={cx("product-col")}>
                  <span className={cx("id")}>{item.ID}</span>
                </td>
                <td className={cx("product-col")}>
                  <div className={cx("product")}>
                    <img
                      src={item.ImageURL}
                      alt={item.FigureName}
                      className={cx("product-img")}
                    />
                  </div>
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "FigureName")}
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "PrimaryType")}
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
                  {renderItemField(item, "Price")}
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "Quantity")}
                </td>
                <td className={cx("product-col")}>
                  {renderItemField(item, "ReleaseDate")}
                </td>
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
                      //onClick={() => handleDeleteItem(item.ID)}
                    />
                  </Container>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Container>
  );
}

export default Products;
