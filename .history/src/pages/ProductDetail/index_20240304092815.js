import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);
function ProductDetail() {
  const [productDetail, setProductDetail] = useState(null);
  const { id } = useParams(); // Lấy id từ URL

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

  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa" }}>
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
                />
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={80}
                  width={80}
                />
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={80}
                  width={80}
                />
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={80}
                  width={80}
                />
                <img
                  src={productDetail.ImageURL}
                  alt={productDetail.FigureName}
                  height={80}
                  width={80}
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
          <Col lg={7}></Col>
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
