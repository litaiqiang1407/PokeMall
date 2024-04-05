import { useState, useEffect } from "react";
import { Container, Dropdown } from "react-bootstrap";
import "tippy.js/dist/tippy.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCircleMinus,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

import { interactData } from "~/functions/interactData";
import { LoadingAnimation, Title } from "~/components";
import { productsURL } from "~/data";
import { handleCheckItem, handleCheckAll } from "~/functions/eventHandlers";

import classNames from "classnames/bind";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);

function Products() {
  const [columns, setColumns] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [itemID, setItemID] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [itemSizes, setItemSizes] = useState([]);
  const [itemSizeName, setItemSizeName] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    interactData(productsURL, "GET", null, (data) => {
      setProductItems(data.products);
      setSizes(data.sizes);
      setColumns(data.columns);
      setLoading(false);
    });
  }, []);

  const handleSizeChange = (itemID, newSize) => {
    setItemSizes({ ...itemSizes, [itemID]: newSize });
    setItemID(itemID);
    setItemSizeName(newSize);
  };

  const handleEditItem = (itemID) => {
    setItemID(itemID);
    setIsEditing(!isEditing);
  };

  // const renderItemField = (item, field) => {
  //   columns.map((column) => {
  //     if (column === field) {
  //       return isEditing && item.ID === itemID ? (
  //         <input className={cx(`input-${field}`)} value={item[field]} />
  //       ) : (
  //         <span className={cx(field)}>{item[field]}</span>
  //       );
  //     }
  //   })
  // }

  const renderItemField = (item, field) =>
    isEditing && item.ID === itemID ? (
      <input className={cx(`input-${field}`)} value={item[field]} />
    ) : (
      <span className={cx(field)}>{item[field]}</span>
    );

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <Container className={cx("container")}>
      <Title title={"Admin Products - PokeMall"} />
      <div className={cx("add")}>
        <button className={cx("btn-add")}>
          <FontAwesomeIcon icon={faPlus} className={cx("icon-add")} />
          {"    "}Add Product
        </button>
      </div>
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
                      productItems
                    );
                  }}
                  checked={checkedItems.length === productItems.length}
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
            {productItems.map((item) => (
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
                  <div className={cx("product")}>
                    <img
                      src={item.Image}
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
