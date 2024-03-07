import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Container>
      <Container className={cx("menu-header")}>
        <Container className={cx("header-container")}>
          <Row>
            <Col lg={3}>
              <Container className={cx("menu-avatar")}>
                <img src={avatar} alt="avatar" />
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
