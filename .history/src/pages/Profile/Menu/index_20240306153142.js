import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Container>
      <Container className={cx("menu-header")}></Container>
      <Link to={"/profile/my-account"}>MyAccount</Link>
      <Link to={"/profile/purchase-orders"}>PurchaseOrders</Link>
    </Container>
  );
}

export default Menu;
