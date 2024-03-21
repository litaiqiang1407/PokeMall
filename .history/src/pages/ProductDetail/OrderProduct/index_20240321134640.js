import { useState, useEffect, useContext } from "react"; // React hooks
import { useParams } from "react-router-dom"; // React router
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Container, Row, Col, Button } from "react-bootstrap"; // Bootstrap

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome
import {
  faBox,
  faCartPlus,
  faCartShopping,
  faHandHoldingDollar,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons"; // Font Awesome

import { AuthContext } from "~/functions/authContext";
import { interactData } from "~/functions/interactData"; // Custom function
import {
  handleDecrease,
  handleIncrease,
  handleQuantityChange,
  handleResponse,
} from "~/functions/eventHandlers"; // Custom functions
import { renderStarIcons } from "~/functions/render"; // Custom function
import { LoadingAnimation, Title } from "~/components"; // Custom components
import { addToCartURL, priceURL, productDetailURL } from "~/data";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ProductDetail.module.scss"; // CSS Module
const cx = classNames.bind(styles); // CSS Module

function OrderProduct() {
    return ( 
        <div>
            {/* Name */}
            <Container className={cx("product-header")}>
              <h2 className={cx("product-name")}>{productDetail.FigureName}</h2>
            </Container>

            {/* Metrics */}
            <Container className={cx("product-metrics")}>
              <Container className={cx("product-rating")}>
                5.0{" "}
                <span className={cx("metrics-data")}>
                  {productDetail.AverageRating}
                </span>
                <FontAwesomeIcon className={cx("rating-icon")} icon={faStar} />
                {starIcons}
              </Container>
              <Container className={cx("product-reviews")}>
                <span className={cx("metrics-data")}>
                  {productDetail.TotalReviews}
                </span>{" "}
                Evaluations
              </Container>
              <Container className={cx("product-sold")}>
                <span className={cx("metrics-data")}>{productDetail.Sold}</span>{" "}
                Sold
              </Container>
              <Container className={cx("product-available")}>
                <span className={cx("metrics-data")}>
                  {productDetail.TotalQuantity}
                </span>{" "}
                Available
              </Container>
            </Container>

            {/* Price */}
            <Container className={cx("product-price")}>
              <span className={cx("price")}>${totalPrice()}</span>
            </Container>

            {/* Options */}
            <Container className={cx("product-options")}>
              {/* Size */}
              <Container className={cx("product-size")}>
                <span className={cx("option-label")}>Size:</span>
                <Container className={cx("size-select")}>
                  {sizes.map((size) => (
                    <Button
                      key={size.ID}
                      className={cx("size-option", {
                        "size-selected": size.SizeName === selectedSize,
                      })}
                      onClick={() => handleSizeSelection(size.SizeName)}
                    >
                      {size.SizeName}
                    </Button>
                  ))}
                  {error && (
                    <span className={cx("error-message")}>{error}</span>
                  )}
                </Container>
              </Container>

              {/* Quantity */}
              <Container className={cx("product-quantity")}>
                <span className={cx("option-label")}>Quantity:</span>
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
              </Container>
            </Container>

            {/* Action */}
            <Container className={cx("product-action")}>
              <Button className={cx("add-to-cart")} onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faCartPlus} />
                <span className={cx("add-to-cart__text")}>Add to Cart</span>
              </Button>
              <Button className={cx("buy")}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className={cx("buy__text")}>Buy</span>
              </Button>
            </Container>

            {/* Policy */}
            <Container className={cx("product-policy")}>
              <Row>
                <Col className={cx("policy-container")} lg={4}>
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                  <span className={cx("policy-text")}>
                    111% refund if the product is fake
                  </span>
                </Col>
                <Col className={cx("policy-container")} lg={4}>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span className={cx("policy-text")}>
                    Open the box to check and receive the goods
                  </span>
                </Col>
                <Col className={cx("policy-container")} lg={4}>
                  <FontAwesomeIcon icon={faBox} />
                  <span className={cx("policy-text")}>
                    Return for manufacturer's error
                  </span>
                </Col>
              </Row>
            </Container>
        </div>
     );
}

export default OrderProduct;