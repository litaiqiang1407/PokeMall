import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { interactData } from "~/functions/interactData";
import { LoadingAnimation } from "~/components";

import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";
import { suggestionsURL } from "~/data";

const cx = classNames.bind(styles);

function Suggestions() {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true); // Indicates if there are more products to load
  const [displayedProducts, setDisplayedProducts] = useState(24);

  useEffect(() => {
    interactData(suggestionsURL, "GET", null, setProducts);
  }, []);

  const fetchMoreData = () => {
    // Fetch more data here, for now just increase the number of displayed products
    setDisplayedProducts(displayedProducts + 24);
  };

  if (!products.length) {
    return <LoadingAnimation />;
  }

  return (
    <Container fluid id="suggestions" className={cx("suggestions")}>
      <Container className={cx("suggestion-header")}>
        <h2 className={cx("suggestion-title")}>SUGGESTIONS</h2>
      </Container>
      <Container className={cx("suggestion-content")}>
        <InfiniteScroll
          dataLength={displayedProducts}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<LoadingAnimation />} // Loader to display while loading more data
          endMessage={<p>No more suggestions to show</p>} // Message when all suggestions are loaded
        >
          <Row>
            {products.slice(0, displayedProducts).map((product) => (
              <Col
                lg={2} // 6 items per row
                sm={4} // 4 items per row
                xs={6} // 2 items per row
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
                    loading="lazy" // lazy load images
                    decoding="async" // async decoding for better performance
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
      {/* Remove the button since infinite scrolling handles loading more data */}
    </Container>
  );
}

export default Suggestions;
