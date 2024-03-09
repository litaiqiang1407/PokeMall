import { useState, useEffect, useContext } from "react"; // React hooks
import { useParams } from "react-router-dom"; // React router
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "~/functions/Contexts/authContext";

import { Container, Row, Col, Button } from "react-bootstrap"; // Bootstrap
import { interactData } from "~/functions/interactData"; // Custom function
import {
  handleDecrease,
  handleIncrease,
  handleQuantityChange,
} from "~/functions/eventHandlers"; // Custom functions
import { renderStarIcons } from "~/functions/render"; // Custom function
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome
import {
  faBox,
  faCartPlus,
  faCartShopping,
  faHandHoldingDollar,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons"; // Font Awesome
import LoadingAnimation from "~/components/LoadingAnimation"; // Loading Animation
import classNames from "classnames/bind"; // CSS Module
import styles from "./ProductDetail.module.scss"; // CSS Module

const cx = classNames.bind(styles); // CSS Module

// Component
function ProductDetail() {
  const [productDetail, setProductDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { isLoggedIn } = useContext(AuthContext);

  const { id } = useParams();

  useEffect(() => {
    interactData(
      `http://localhost/pokemall/api/ProductDetail.php?productId=${id}`,
      "GET",
      null,
      setProductDetail
    );
  }, [id]);

  if (!productDetail) {
    return <LoadingAnimation />;
  }

  const starIcons = renderStarIcons(productDetail.AverageRating, cx);

  const handleAddToCart = () => {
    if (isLoggedIn) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const product = {
        productId: productDetail.ProductID,
        productName: productDetail.FigureName,
        productImage: productDetail.ImageURL,
        productPrice: productDetail.DefaultPrice,
        productQuantity: quantity,
      };
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px 0" }}>
      <Container className={cx("product")}>
        <Row>
          <Col lg={5}>
            <Row className={cx("product-img")}>
              {/* List Images */}
              <Col className={cx("img-list")} lg={2}>
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={80}
                  width={80}
                  className={cx("img-list__item")}
                />
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={80}
                  width={80}
                  className={cx("img-list__item")}
                />
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={80}
                  width={80}
                  className={cx("img-list__item")}
                />
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={80}
                  width={80}
                  className={cx("img-list__item")}
                />
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={80}
                  width={80}
                  className={cx("img-list__item")}
                />
              </Col>

              {/* Selected Image */}
              <Col lg={10}>
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={436}
                  width={436}
                  className={cx("img-selected")}
                />
              </Col>
            </Row>
          </Col>

          {/* Order Product */}
          <Col lg={7}>
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
              <span className={cx("price")}>${productDetail.DefaultPrice}</span>
            </Container>

            {/* Options */}
            <Container className={cx("product-options")}>
              {/* Size */}
              <Container className={cx("product-size")}>
                <span className={cx("option-label")}>Size:</span>
                <Container className={cx("size-select")}>
                  <Button className={cx("size-option")}>1:1</Button>
                  <Button className={cx("size-option")}>1:2</Button>
                  <Button className={cx("size-option")}>1:4</Button>
                  <Button className={cx("size-option")}>1:8</Button>
                  <Button className={cx("size-option")}>1:16</Button>
                  <Button className={cx("size-option")}>1:20</Button>
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
          </Col>
        </Row>

        {/* Product Info */}
      </Container>
      <Container className={cx("product-content")}>
        {/* Product Description */}
        <Container className={cx("product-description")}>
          <Container className={cx("description-header")}>
            <h2 className={cx("description-title")}>Description</h2>
          </Container>
          <Container className={cx("description-content")}>
            <p>{productDetail.Description}</p>
          </Container>
        </Container>

        {/* Product Information */}
        <Container className={cx("product-information")}>
          <Container className={cx("information-header")}>
            <h2 className={cx("information-title")}>Information</h2>
          </Container>
          <Container className={cx("information-content")}>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Name: </span>
              <span className={cx("information-text")}>
                {productDetail.FigureName}
              </span>
            </p>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Primary Type: </span>
              <span className={cx("information-text")}>
                {productDetail.PrimaryTypeName}
              </span>
            </p>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Second Type: </span>
              <span className={cx("information-text")}>
                {productDetail.SecondTypeName || "No"}
              </span>
            </p>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Species: </span>
              <span className={cx("information-text")}>
                {productDetail.Species}
              </span>
            </p>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Height: </span>
              <span className={cx("information-text")}>
                {productDetail.Height} m
              </span>
            </p>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Weight: </span>
              <span className={cx("information-text")}>
                {productDetail.Weight} kg
              </span>
            </p>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Material: </span>
              <span className={cx("information-text")}>
                {productDetail.Material}
              </span>
            </p>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Release Date: </span>
              <span className={cx("information-text")}>
                {productDetail.ReleaseDate}
              </span>
            </p>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default ProductDetail;
