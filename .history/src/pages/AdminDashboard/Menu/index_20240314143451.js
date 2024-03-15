import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChartLine,
  faDragon,
  faReceipt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function Menu() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className={cx("container")}>
      <Container className={cx("menu-header")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Container>
      <Container className={cx("menu-content")}>
        <Container
          className={cx("menu-item", {
            active: isActive("/admin/dashboard"),
          })}
        >
          <Link to="/admin/dashboard">
            <p>
              <FontAwesomeIcon icon={faChartLine} />
            </p>
            <span className={cx("item-text")}>Dashboard</span>
          </Link>
        </Container>
        <Container
          className={cx("menu-item", {
            active: isActive("/admin/users"),
          })}
        >
          <Link to="/admin/users">
            <p>
              <FontAwesomeIcon icon={faUsers} />
            </p>
            <span className={cx("item-text")}>Users</span>
          </Link>
        </Container>
        <Container
          className={cx("menu-item", {
            active: isActive("/admin/products"),
          })}
        >
          <Link to="/admin/products">
            <p>
              <FontAwesomeIcon icon={faDragon} />
            </p>
            <span className={cx("item-text")}>Products</span>
          </Link>
        </Container>
        <Container
          className={cx("menu-item", {
            active: isActive("/admin/orders"),
          })}
        >
          <Link to="/admin/orders">
            <p>
              <FontAwesomeIcon icon={faReceipt} />
            </p>
            <span className={cx("item-text")}>Orders</span>
          </Link>
        </Container>
      </Container>
    </div>
  );
}

export default Menu;
