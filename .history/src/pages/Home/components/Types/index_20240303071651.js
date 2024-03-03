import { Container } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Types.module.scss";

const cx = classNames.bind(styles);

function Types() {
  return;
  <Container fluid>
    <Container className={cx("types-container")}>
      <Container className={cx("types-header")}>Types</Container>
      <Container className={cx("types-content")}>
        <Container className={cx("types-content-item")}>
          <Container className={cx("types-content-item-img")}>
            <img
              src={require("../assets/img/PokemonTypes/Pokémon_Fighting_Type_Icon.svg.png ")}
              alt="type"
            />
          </Container>
          <Container className={cx("types-content-item-title")}>
            FIGHTING
          </Container>
        </Container>
      </Container>
    </Container>
  </Container>;
}

export default Types;
