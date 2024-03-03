import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";

const cx = classNames.bind(styles);

const initialProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    rating: 4.5,
    imgSrc: "path/to/product1.jpg",
  },
  // Add more products as needed
];

function Suggestions() {
  const [products, setProducts] = useState(initialProducts);
  const [showMore, setShowMore] = useState(false);

  const loadMoreProducts = () => {
    // Simulate loading more products from an API or database
    // For demonstration purposes, we'll just duplicate the existing products
    setProducts([...products, ...initialProducts]);
    setShowMore(true);
  };

  return (
    <Container className={cx("suggestions-container")}>
      <Row>
        <Col>
          <h2 className={cx("header")}>Suggestions</h2>
        </Col>
      </Row>
      <Row>
        {products.slice(0, showMore ? products.length : 6).map((product) => (
          <Col lg={2} key={product.id} className={cx("product-col")}>
            <Link to={`/product/${product.id}`} className={cx("product-link")}>
              <img src={product.imgSrc} alt={product.name} className={cx("product-img")} />
              <div className={cx("product-info")}>
                <p className={cx("product-name")}>{product.name}</p>
                <p className={cx("product-price")}>${product.price}</p>
                <div className={cx("product-rating")}>
                  {Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className={cx("star-icon")} />
                  ))}
                  <span className={cx("rating-value")}>{product.rating}</span>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      {showMore && (
        <Row>
          <Col>
            <Button onClick={loadMoreProducts} className={cx("more-button")}>
              Load More
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Suggestions;
