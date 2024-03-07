import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
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
    <Container className={cx("menu-container")}>
      <Container className={cx("menu-header")}>
        <Row className={cx("header-row")}>
          <Col lg={3}>
            <Container className={cx("menu-avatar")}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBOXxBP-iD2MUBbkQGDG_wyNoeszDnYO5oA&usqp=CAU"
                alt="avatar"
                className={cx("avatar-img")}
              />
            </Container>
          </Col>
          <Col lg={9}>
            <p className={cx("menu-name")}>Avocado</p>
          </Col>
        </Row>
      </Container>
      <Container className={cx("menu-body")}>
        <Container
          className={cx("link-container", {
            "active-link": isActive("/profile/my-account"),
          })}
        >
          <Link to={"/profile/my-account"} className={cx("menu-link")}>
            <FontAwesomeIcon className={cx("link-icon")} icon={faUser} />
            My Account
          </Link>
        </Container>
        <Container
          className={cx("link-container", {
            "active-link": isActive("/profile/purchase-orders"),
          })}
        >
          <Link to={"/profile/purchase-orders"} className={cx("menu-link")}>
            <FontAwesomeIcon
              className={cx("link-icon")}
              icon={faShoppingCart}
            />
            Purchase Orders
          </Link>
        </Container>
      </Container>
    </Container>
  );
}

export default Menu;
