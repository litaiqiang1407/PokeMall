import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

import Title from "~/components/Title";

import classNames from "classnames/bind";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);

function Products() {
  return (
    <Container className={cx("container")}>
      <Title>Admin Products - PokeMall</Title>
      <Container className={cx("header")}>
        <Container>
          <FontAwesomeIcon icon={faDragon} className={cx("header-icon")} />
          <span className={cx("header-title")}>Products</span>
        </Container>
        <Container></Container>
      </Container>
    </Container>
  );
}

export default Products;
