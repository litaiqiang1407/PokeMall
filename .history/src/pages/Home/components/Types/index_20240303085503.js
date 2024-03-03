import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Types.module.scss";

const cx = classNames.bind(styles);

function Types() {
  const types = [
    { name: "Normal", color: "#B3A392" },
    { name: "Fire", color: "#DA2C33" },
    { name: "Water", color: "#0067AB" },
    { name: "Grass", color: "#02913A" },
    { name: "Electric", color: "#FBD100" },
    { name: "Psychic", color: "#F97077" },
    { name: "Fighting", color: "#D03F6C" },
    { name: "Ground", color: "#E6AE44" },
    { name: "Rock", color: "#C8B686" },
    { name: "Flying", color: "#648ABC" },
    { name: "Bug", color: "#A5B614" },
    { name: "Poison", color: "#B15192" },
    { name: "Ghost", color: "#7C6DA4" },
    { name: "Ice", color: "#38A3C4" },
    { name: "Dragon", color: "#7C6DA4" },
    { name: "Fairy", color: "#B15192" },
    { name: "Steel", color: "#92A3AA" },
    { name: "Dark", color: "#623A26" },
  ];

  return (
    <Container fluid className={cx("types")}>
      <Container className={cx("types-container")}>
        <Container className={cx("types-header")}>
          <h2 className={cx("types-title")}>Type</h2>
        </Container>

        <Row>
          {types.slice(0, 9).map((type, index) => (
            <Col key={index} className={cx("type-col")}>
              <Link to={`/type/${type.name}`} className={cx("type-link")}>
                <img
                  src={`../../assets/img/PokemonTypes/Pokémon_${type.name}_Type_Icon.svg.png`}
                  alt={type.name}
                  className={cx("type-icon")}
                />
                <span className={cx("type-name")} style={{ color: type.color }}>
                  {type.name}
                </span>
              </Link>
            </Col>
          ))}
        </Row>
        <Row>
          {types.slice(9).map((type, index) => (
            <Col key={index} className={cx("type-col")}>
              <Link to={`/type/${type.name}`} className={cx("type-link")}>
                <img
                  src={`../../assets/img/PokemonTypes/Pokémon_${type.name}_Type_Icon.svg.png`}
                  alt={type.name}
                  className={cx("type-icon")}
                />
                <Container>
                  <span
                    className={cx("type-name")}
                    style={{ color: type.color }}
                  >
                    {type.name}
                  </span>
                </Container>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Types;
