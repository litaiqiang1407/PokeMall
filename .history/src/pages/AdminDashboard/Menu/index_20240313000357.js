import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChartLine,
  faDragon,
  faReceipt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function Menu() {
  return (
    <div className={cx("container")}>
      <Container className={cx("menu-header")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Container>
      <Container className={cx("menu-content")}>
        <Container className={cx("menu-item")}>
          <Link to="/admin/dashboard">
            <FontAwesomeIcon icon={faChartLine} />
            <span className={cx("item-text")}>Dashboard</span>
          </Link>
        </Container>
        <Container className={cx("menu-item")}>
          <Link to="/admin/users">
            <FontAwesomeIcon icon={faUsers} />
            <span className={cx("item-text")}>Users</span>
          </Link>
        </Container>
        <Container className={cx("menu-item")}>
          <Link to="/admin/products">
            <FontAwesomeIcon icon={faDragon} />
            <span className={cx("item-text")}>Products</span>
          </Link>
        </Container>
        <Container className={cx("menu-item")}>
          <Link to="/admin/orders">
            <FontAwesomeIcon icon={faReceipt} />
            <span className={cx("item-text")}>Orders</span>
          </Link>
        </Container>
      </Container>
    </div>
  );
}

export default Menu;
