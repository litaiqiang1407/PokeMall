import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";

const cx = classNames.bind(styles);

function Suggestions({ products }) {
  return (
    <Container className={cx("suggestions-container")}>
      <Row>
        <Col>
          <h2 className={cx("header")}>Suggestions</h2>
        </Col>
      </Row>
      <Row>
        {products.map((product, index) => (
          <Col key={index} lg={3} md={4} sm={6} xs={12}>
            <Card className={cx("product-card")}>
              <Card.Img variant="top" src={product.imgSrc} alt={product.name} />
              <Card.Body>
                <Card.Title className={cx("product-name")}>
                  {product.name}
                </Card.Title>
                <Card.Text className={cx("product-price")}>
                  ${product.price}
                </Card.Text>
                <Card.Text className={cx("product-rating")}>
                  Rating: {product.rating}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Button className={cx("more-button")}>More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Suggestions;
