import { Container, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Types.module.scss";

const cx = classNames.bind(styles);

function Types() {
  const types = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Fighting",
    "Ground",
    "Rock",
    "Flying",
    "Bug",
    "Poison",
    "Ghost",
    "Ice",
    "Dragon",
    "Fairy",
    "Steel",
    "Dark",
  ];

  return (
    <Container className={cx("types-container")}>
      <Row>
        <Col>
          <h2 className={cx("header")}>Types</h2>
        </Col>
      </Row>
      <Row>
        {types.slice(0, 9).map((type, index) => (
          <Col key={index} className={cx("type-col")}>
            <img
              src={`../../assets/img/PokemonTypes/Pokémon_${type}_Type_Icon.svg.png`}
              alt={type}
              className={cx("type-icon")}
            />
            <span className={cx("type-name")}>{type}</span>
          </Col>
        ))}
      </Row>
      <Row>
        {types.slice(9).map((type, index) => (
          <Col key={index} className={cx("type-col")}>
            <img
              src={`../../assets/img/PokemonTypes/Pokémon_${type}_Type_Icon.svg.png`}
              alt={type}
              className={cx("type-icon")}
            />
            <span className={cx("type-name")}>{type}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Types;
