import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Suggestions.module.scss";

const cx = classNames.bind(styles);

function Suggestions() {
  const products = [
    {
      id: 1,
      Name: "Fushigidane",
      Price: 100,
      Rating: 4,
      Img: "../../assets/img/PokemonTypes/Pokémon_Normal_Type_Icon.svg.png",
    },
  ];
  return (
    <Container className={cx("suggestions-container")}>
      <Container className={cx("suggestion-header")}>
        <h2 className={cx("suggestion-title")}>Suggestions</h2>
      </Container>
      <Container className={cx("suggestion-content")}>
        <Row>
          {products.map((product, index) => (
            <Col lg={2} key={index} className={cx("suggestion-product")}>
              <Link
                to={`/product/${product.id}`}
                className={cx("product-link")}
              >
                <Card className={cx("product-card")}>
                  <Card.Img variant="top" src={product.Img} />
                  <Card.Body>
                    <Card.Title>{product.Name}</Card.Title>
                    <Card.Text>${product.Price}</Card.Text>
                    <Card.Text>Rating: {product.Rating}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className={cx("suggestion-footer")}>
        <Button className={cx("more-button")}>More</Button>
      </Container>
    </Container>
  );
}

export default Suggestions;
