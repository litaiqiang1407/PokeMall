import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faCartShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
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
          <Col lg={7}>
            <Container className={cx("product-header")}>
              <h2 className={cx("product-name")}>{productDetail.FigureName}</h2>
            </Container>
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
                Products available
              </Container>
            </Container>
            <Container className={cx("product-price")}>
              <span className={cx("price")}>${productDetail.DefaultPrice}</span>
            </Container>
            <Container className={cx("product-options")}>
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
          </Col>
        </Row>
        <h2>{productDetail.FigureName}</h2>
        <img src={productDetail.ImageURL} alt={productDetail.FigureName} />
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
    </Container>
  );
}

export default ProductDetail;
