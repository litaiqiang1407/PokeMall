import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";

const cx = classNames.bind(styles);

function Suggestions() {
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axios
      .get("path/to/your/php/file.php")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const loadMoreProducts = () => {
    setShowMore(true);
  };
  return (
    <Container fluid className={cx("suggestions-container")}>
      <Container className={cx("suggestion-header")}>
        <h2 className={cx("suggestion-title")}>SUGGESTIONS</h2>
      </Container>
      <Container className={cx("suggestion-content")}>
        <Row>
          {products.slice(0, showMore ? products.length : 6).map((product) => (
            <Col lg={2} key={product.id} className={cx("product-item")}>
              <Link
                to={`/product/${product.id}`}
                className={cx("product-link")}
              >
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className={cx("product-img")}
                />
                <div className={cx("product-info")}>
                  <p className={cx("product-name")}>{product.name}</p>
                  <Container className={cx("product-footer")}>
                    <p className={cx("product-price")}>${product.price}</p>
                    <p className={cx("product-sold")}>{product.sold} Sold</p>
                  </Container>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className={cx("suggestion-footer")}>
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
    </Container>
  );
}

export default Suggestions;
