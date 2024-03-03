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
      <h2 className={cx("types-header")}>Types</h2>
      <Row>
        <Col>
          {types.slice(0, 9).map((type, index) => (
            <img
              key={index}
              height={100}
              width={100}
              src={`../../assets/img/PokemonTypes/Pokémon_${type}_Type_Icon.svg.png`}
              alt={type}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          {types.slice(9).map((type, index) => (
            <img
              key={index}
              height={100}
              width={100}
              src={`../../assets/img/PokemonTypes/Pokémon_${type}_Type_Icon.svg.png`}
              alt={type}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Types;
