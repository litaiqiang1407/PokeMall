import { useState, useEffect, useCallback } from "react";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDragon,
  faXmark,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import Title from "~/components/Title";

import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { interactData } from "~/functions/interactData";
const cx = classNames.bind(styles);

function Products() {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    interactData(
      "http://localhost/pokemall/api/Products.php",
      "GET",
      null,
      setProductItems
    );
  }, []);

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
          <div className={cx("header-add")}>
            <button className={cx("btn-add")}>
              <FontAwesomeIcon icon={faPlus} className={cx("icon-add")} />
            </button>
          </div>
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
                  // onChange={handleCheckAll}
                  // checked={checkedItems.length === cartItems.length}
                />
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
                    // onChange={(e) => handleCheckItem(item.ID, e.target.checked)}
                    // checked={checkedItems.includes(item.ID)}
                  />
                </td>
                <td className={cx("product-col")}>
                  <div className={cx("product")}>
                    <Link to={`/product-detail/${item.FigureID}`}>
                      <img
                        src={item.ImageURL}
                        alt={item.Name}
                        className={cx("product-img")}
                      />
                    </Link>
                  </div>
                </td>
                <td className={cx("product-col")}>
                  <span className={cx("price")}>${item.Price}</span>
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
    </Container>
  );
}

export default Products;
