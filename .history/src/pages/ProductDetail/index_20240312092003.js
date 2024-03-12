import { useState, useEffect, useContext } from "react"; // React hooks
import { useParams } from "react-router-dom"; // React router
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "~/functions/Contexts/authContext";
import { Toaster } from "react-hot-toast";

import { Container, Row, Col, Button } from "react-bootstrap"; // Bootstrap
import { interactData } from "~/functions/interactData"; // Custom function
import {
  handleDecrease,
  handleIncrease,
  handleQuantityChange,
  handleResponse,
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
import Title from "~/components/Title";

import classNames from "classnames/bind"; // CSS Module
import styles from "./ProductDetail.module.scss"; // CSS Module

const cx = classNames.bind(styles); // CSS Module

// Component
function ProductDetail() {
  const { isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    id: "",
  });
  const [productDetail, setProductDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizePrice, setSizePrice] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    interactData(
      `http://localhost/pokemall/api/ProductDetail.php?productId=${id}`,
      "GET",
      null,
      setProductDetail
    );
  }, [id]);

  useEffect(() => {
    interactData(
      "http://localhost/pokemall/api/Size.php",
      "GET",
      null,
      setSizes
    );
  }, []);

  // useEffect(() => {
  //   if (productDetail) {
  //     document.title = productDetail.FigureName + " | PokeMall";
  //   }
  // }, [productDetail]);

  useEffect(() => {
    if (selectedSize) {
      interactData(
        `http://localhost/pokemall/api/Price.php?productId=${id}&sizeName=${selectedSize}`,
        "GET",
        null,
        setSizePrice
      );
    }
  }, [id, selectedSize]);

  const totalPrice = () => {
    if (sizePrice) {
      return parseFloat(sizePrice[0].Price * quantity).toFixed(2);
    } else {
      return parseFloat(productDetail.DefaultPrice * quantity).toFixed(2);
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserData(userData);
    }
  }, []);

  if (!productDetail) {
    return <LoadingAnimation />;
  }

  const starIcons = renderStarIcons(productDetail.AverageRating, cx);
  const { id: customerID } = userData;
  const product = {
    customerID: customerID,
    figureID: productDetail.ID,
    sizeName: selectedSize,
    quantity: quantity,
  };
  const handleSizeSelection = (sizeName) => {
    setSelectedSize(sizeName);
    setError("");
  };
  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size.");
      return;
    }
    if (isLoggedIn) {
      interactData(
        "http://localhost/pokemall/actions/addToCart.php",
        "POST",
        product,
        (data) => {
          console.log(data);
          handleResponse(data, "Add to Cart");
        }
      );
    } else {
      navigate("/login");
    }
  };

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa", padding: "20px 0" }}>
      <Title title={productDetail.FigureName} />
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
      <Toaster />
    </Container>
  );
}

export default ProductDetail;
