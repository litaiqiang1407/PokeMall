import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";

const cx = classNames.bind(styles);

function Suggestions() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    axios
      .get(
        `http://localhost/pokemall/api/SuggestionProducts.php?offset=${offset}`
      )
      .then((response) => {
        setProducts((prevProducts) => [...prevProducts, ...response.data]);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const loadMoreProducts = () => {
    setOffset((prevOffset) => prevOffset + 24);
  };

  return (
    <Container fluid className={cx("suggestions-container")}>
      <Container className={cx("suggestion-header")}>
        <h2 className={cx("suggestion-title")}>SUGGESTIONS</h2>
      </Container>
      <Container className={cx("suggestion-content")}>
        <Row>
          {products.map((product) => (
            <Col lg={2} key={product.ID} className={cx("product-item")}>
              <Link
                to={`/product/${product.ID}`}
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
