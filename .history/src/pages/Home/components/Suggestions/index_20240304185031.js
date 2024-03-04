import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchData } from "~/functions/fetchData";
import { loadMoreProducts } from "~/functions/handleEvent";
import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";

const cx = classNames.bind(styles);

function Suggestions() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(24);

  useEffect(() => {
    fetchData(
      "http://localhost/pokemall/api/SuggestionProducts.php",
      setProducts
    );
  }, []);

  const loadMoreProducts = () => {
    setDisplayedProducts(displayedProducts + 24);
  };

  return (
    <Container fluid className={cx("suggestions-container")}>
      <Container className={cx("suggestion-header")}>
        <h2 className={cx("suggestion-title")}>SUGGESTIONS</h2>
      </Container>
      <Container className={cx("suggestion-content")}>
        <Row>
          {products.slice(0, displayedProducts).map((product) => (
            <Col lg={2} key={product.ID} className={cx("product-item")}>
              <Link
                to={`/product-detail/${product.ID}`}
                className={cx("product-link")}
              >
                <img
                  src={product.ImageURL}
                  alt={product.FigureName}
                  className={cx("product-img")}
                />
                <div className={cx("product-info")}>
                  <p className={cx("product-name")}>{product.FigureName}</p>
                  <Container className={cx("product-footer")}>
                    <p className={cx("product-price")}>${product.Price}</p>
                    <p className={cx("product-sold")}>{product.Sold} Sold</p>
                  </Container>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className={cx("suggestion-footer")}>
        <Button onClick={loadMoreProducts} className={cx("more-button")}>
          More
        </Button>
      </Container>
    </Container>
  );
}

export default Suggestions;
