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
      <h2>{productDetail[0].FigureName}</h2>
      <img src={productDetail[0].ImageURL} alt={productDetail[0].FigureName} />
      <p>Rating Value: {productDetail[0].Rating}</p>
      <p>Total Reviews: {productDetail[0].TotalReviews}</p>
      <h3>Sizes:</h3>
      <ul>
        {productDetail.map((item) => (
          <li key={item.ID}>
            {item.SizeName}: {item.TotalQuantity} available
          </li>
        ))}
      </ul>
      <h3>Description:</h3>
      <p>{productDetail[0].Description}</p>
      <h3>Information:</h3>
      <ul>
        <li>Seed: {productDetail[0].Seed}</li>
        <li>
          Types: {productDetail[0].PrimaryType}, {productDetail[0].SecondType}
        </li>
        <li>Height: {productDetail[0].Height}</li>
        <li>Weight: {productDetail[0].Weight}</li>
        <li>Material: {productDetail[0].Material}</li>
        <li>Release Date: {productDetail[0].ReleaseDate}</li>
      </ul>
    </Container>
  );
}

export default ProductDetail;
