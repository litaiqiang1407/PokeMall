import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu() {
  return (
    <Container>
      <Container className={cx("menu-header")}>
        <Container className={cx("header-container")}>
          <Row>
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
              <Container>
                <p className={cx("menu-name")}>Name</p>
                <Button className={cx("menu-button")}>
                  <FontAwesomeIcon icon={faEdit} />
                  Edit Profile
                </Button>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className={cx("menu-body")}>
        <Container>
          <Link to={"/profile/my-account"} className={cx("menu-link")}>
            <FontAwesomeIcon icon={faUser} />
            My Account
          </Link>
        </Container>
        <Container>
          <Link to={"/profile/purchase-orders"} className={cx("menu-link")}>
            <FontAwesomeIcon icon={faShoppingCart} />
            Purchase Orders
          </Link>
        </Container>
      </Container>
    </Container>
  );
}

export default Menu;
