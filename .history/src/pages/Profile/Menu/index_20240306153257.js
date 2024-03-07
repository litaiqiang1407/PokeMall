import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Container>
      <Container className={cx("menu-header")}>
        <Container className={cx("header-container")}>
          <Container className={cx("header-image")}></Container>
          <Container className={cx("header-text")}>Welcome, User</Container>
        </Container>
      </Container>
      <Link to={"/profile/my-account"}>MyAccount</Link>
      <Link to={"/profile/purchase-orders"}>PurchaseOrders</Link>
    </Container>
  );
}

export default Menu;
