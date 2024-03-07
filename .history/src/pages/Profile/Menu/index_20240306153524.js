import { Container } from "react-bootstrap";
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
            <Col lg={9}></Col>
          </Row>
        </Container>
      </Container>
      <Link to={"/profile/my-account"}>MyAccount</Link>
      <Link to={"/profile/purchase-orders"}>PurchaseOrders</Link>
    </Container>
  );
}

export default Menu;
