import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Container } from "react-bootstrap";

const cx = classNames.bind(styles);

function Menu() {
  return (
    <div className={cx("container")}>
      <Container className={cx("menu-header")}></Container>
      Menu
    </div>
  );
}

export default Menu;
