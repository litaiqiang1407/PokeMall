// React
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";

// Axios
import axios from "axios";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCartPlus,
  faCartShopping,
  faHandHoldingDollar,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

// Styles
import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

// Component
function ProductDetail() {
  const [productDetail, setProductDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost/pokemall/api/ProductDetail.php?productId=${id}`)
      .then((response) => {
        setProductDetail(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product detail: ", error);
      });
  }, [id]);

  if (!productDetail) {
    return <p>Loading...</p>;
  }

  const renderStarIcons = () => {
    const rating = Math.round(productDetail.AverageRating);
    const starIcons = [];
    for (let i = 0; i < rating; i++) {
      starIcons.push(
        <FontAwesomeIcon key={i} className={cx("rating-icon")} icon={faStar} />
      );
    }
    return starIcons;
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
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
                {renderStarIcons()}
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
                  <Button className={cx("decrease")} onClick={handleDecrease}>
                    -
                  </Button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className={cx("quantity-input")}
                  />
                  <Button className={cx("increase")} onClick={handleIncrease}>
                    +
                  </Button>
                </Container>
              </Container>
            </Container>

            {/* Action */}
            <Container className={cx("product-action")}>
              <Button className={cx("add-to-cart")}>
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

        <p>{productDetail.Description}</p>
        <p>Species: {productDetail.Species}</p>
        <p>Primary Type: {productDetail.PrimaryTypeName}</p>
        <p>Second Type: {productDetail.SecondTypeName}</p>
        <p>Height: {productDetail.Height}</p>
        <p>Weight: {productDetail.Weight}</p>
        <p>Material: {productDetail.Material}</p>
        <p>Release Date: {productDetail.ReleaseDate}</p>
        <p>Default Price: ${productDetail.DefaultPrice}</p>
        <p>Total Quantity: {productDetail.TotalQuantity}</p>
        <p>Average Rating: {productDetail.AverageRating}</p>
        <p>Total Reviews: {productDetail.TotalReviews}</p>
      </Container>
      <Container className={cx("product-content")}>
        <Container className={cx("product-description")}>
          <Container className={cx("description-header")}>
            <h2 className={cx("description-title")}>Description</h2>
          </Container>
          <Container className={cx("description-content")}>
            <p>{productDetail.Description}</p>
          </Container>
        </Container>
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
                {productDetail.SecondTypeName}
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
                {productDetail.Height}
              </span>
            </p>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Weight: </span>
              <span className={cx("information-text")}>
                {productDetail.Weight}
              </span>
            </p>
            <p className={cx("information-item")}>
              <span className={cx("information-title")}>Material: </span>
              <span className={cx("information-text")}>
                {productDetail.Meterial}
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
