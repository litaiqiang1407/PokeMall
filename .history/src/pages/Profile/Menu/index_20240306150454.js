import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Container>
      Menu
      <Link to={"/my-account"}>MyAccount</Link>
    </Container>
  );
}

export default Menu;
