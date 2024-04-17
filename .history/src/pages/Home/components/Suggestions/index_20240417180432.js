import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { interactData } from "~/functions/interactData";
import { LoadingAnimation } from "~/components";

import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";
import { suggestionsURL } from "~/data";

const cx = classNames.bind(styles);

function Suggestions() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(24);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    interactData(suggestionsURL, "GET", null, setProducts).then(() =>
      setIsLoading(false)
    );
  }, []);

  const loadMoreProducts = () => {
    setDisplayedProducts(displayedProducts + 24);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
          loadMoreProducts();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  return (
    <Container
      fluid
      id="suggestions"
      className={cx("suggestions")}
      ref={containerRef}
    >
      <Container className={cx("suggestion-header")}>
        <h2 className={cx("suggestion-title")}>SUGGESTIONS</h2>
      </Container>
      <Container className={cx("suggestion-content")}>
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
      </Container>
      {isLoading && <LoadingAnimation />}
    </Container>
  );
}

export default Suggestions;
