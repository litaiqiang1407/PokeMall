import { Link } from "react-router-dom";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";

const cx = classNames.bind(styles);

function Suggestions({ products }) {
  return (
    <Container className={cx("suggestions-container")}>
      <Container className={cx("suggestion-header")}>
        <h2 className={cx("suggestion-title")}>Suggestions</h2>
      </Container>
      <Container className={cx("suggestion-content")}>
        <Row>
          {/* {products.map((product, index) => (
            <Col lg={2} key={index} className={cx("suggestion-product")}>
              <Link
                to={`/product/${product.id}`}
                className={cx("product-link")}
              >
                <Card className={cx("product-card")}>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Card.Text>Rating: {product.rating}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))} */}
          <Col lg={2} className={cx("suggestion-product")}>
            <Link to={`/product/id`} className={cx("product-link")}>
              <Card className={cx("product-card")}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>Fushigidane</Card.Title>
                  <Card.Text>$20.9</Card.Text>
                  <Card.Text>5</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container className={cx("suggestion-footer")}>
        <Button className={cx("more-button")}>More</Button>
      </Container>
    </Container>
  );
}

export default Suggestions;
