import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

function ProductDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost/pokemall/api/ProductDetail.php?id=${id}`)
      .then((response) => {
        setProductDetail(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product detail: ", error);
      });
  }, [id]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2>{productDetail.FigureName}</h2>
      <p>Price: ${productDetail.Price}</p>
      <p>Sold: {productDetail.Sold}</p>
      <p>Description: {productDetail.Description}</p>
      {/* Thêm các thông tin khác của sản phẩm */}
    </Container>
  );
}

export default ProductDetail;
