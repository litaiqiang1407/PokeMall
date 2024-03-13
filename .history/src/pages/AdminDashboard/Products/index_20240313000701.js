import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import { Container } from "react-bootstrap";
const cx = classNames.bind(styles);

function Products() {
  return (
    <div>
      <Container className={cx("header")}></Container>
    </div>
  );
}

export default Products;
