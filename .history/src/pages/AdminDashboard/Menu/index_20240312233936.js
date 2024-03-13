import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Menu() {
  return (
    <div className={cx("container")}>
      <Container className={cx("menu-header")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Container>
      <Container className={cx("menu-content")}>
        <Container className={cx("menu-item")}>Dashboard</Container>
        <Container className={cx("menu-item")}>Users</Container>
        <Container className={cx("menu-item")}>Products</Container>
        <Container className={cx("menu-item")}>Orders</Container>
      </Container>
    </div>
  );
}

export default Menu;
