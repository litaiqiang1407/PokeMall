import { useState, useEffect, useRef } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    interactData(suggestionsURL, "GET", null, setProducts);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setDisplayedProducts(displayedProducts + 24);
        setIsLoading(false);
      }, 1000); // Simulate loading delay for demo purposes
    }
  };

  if (!products.length) {
    return <LoadingAnimation />;
  }

  return (
    <Container fluid id="suggestions" className={cx("suggestions")}>
      <Container className={cx("suggestion-header")}>
        <h2 className={cx("suggestion-title")}>SUGGESTIONS</h2>
      </Container>
      <Container className={cx("suggestion-content")} ref={containerRef}>
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
      {isLoading && (
        <Container className={cx("loading-container")}>
          <LoadingAnimation />
        </Container>
      )}
    </Container>
  );
}

export default Suggestions;
