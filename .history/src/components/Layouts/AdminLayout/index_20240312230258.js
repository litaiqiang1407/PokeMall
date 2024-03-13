import { Col, Row } from "react-bootstrap";
import Header from "../Components/Header";

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <Row>
          <Col lg={2}></Col>
          <Col lg={10}>{children}</Col>
        </Row>
      </div>
    </div>
  );
}

export default AdminLayout;
