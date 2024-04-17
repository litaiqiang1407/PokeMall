import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component"; // Import the InfiniteScroll component

import { interactData } from "~/functions/interactData";
import { LoadingAnimation } from "~/components";

import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";
import { suggestionsURL } from "~/data";

const cx = classNames.bind(styles);

function Suggestions() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(24);
  const [hasMore, setHasMore] = useState(true); // Track if there's more data to load

  useEffect(() => {
    interactData(suggestionsURL, "GET", null, setProducts);
  }, []);

  if (!products.length) {
    return <LoadingAnimation />;
  }

  const loadMoreProducts = () => {
    if (displayedProducts >= products.length) {
      setHasMore(false); // Disable further loading when all products are displayed
      return;
    }
    setDisplayedProducts(displayedProducts + 24);
  };

  return (
    <Container fluid id="suggestions" className={cx("suggestions")}>
      <Container className={cx("suggestion-header")}>
        <h2 className={cx("suggestion-title")}>SUGGESTIONS</h2>
      </Container>
      <InfiniteScroll
        dataLength={displayedProducts}
        next={loadMoreProducts}
        hasMore={hasMore} // Pass the hasMore state to the InfiniteScroll component
        loader={<LoadingAnimation />} // Loader to show while loading more products
        endMessage={<p>No more suggestions</p>} // Message to show when all products are loaded
      >
        <Row>
          {products.slice(0, displayedProducts).map((product) => (
            <Col
              lg={2}
              sm={4}
              xs={6}
              key={product.ID}
              className={cx("product-item")}
            >
              <Link
                to={`/product-detail/${product.ID}`}
                className={cx("product-link")}
              >
                <img
                  src={product.ImageURL}
                  alt={product.FigureName}
                  className={cx("product-img")}
                  loading="lazy"
                  decoding="async"
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
      </InfiniteScroll>
    </Container>
  );
}

export default Suggestions;
