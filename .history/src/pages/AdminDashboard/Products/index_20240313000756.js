import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Title from "~/components/Title";

import classNames from "classnames/bind";
import styles from "./Products.module.scss";
const cx = classNames.bind(styles);

function Products() {
  return (
    <div>
      <Container className={cx("header")}>
        <FontAwesomeIcon icon={faShoppingCart} className={cx("header-icon")} />
        <span className={cx("header-title")}>CART</span>
      </Container>
    </div>
  );
}

export default Products;
