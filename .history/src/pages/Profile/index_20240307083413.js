import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";

function Profile({ children }) {
  return (
    <Container fluid style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row>
          <Col lg={3}>
            <Menu />
          </Col>
          <Col lg={9}>{children}</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Profile;
