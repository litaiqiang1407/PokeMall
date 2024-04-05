import { Row, Col } from "react-bootstrap";
import Menu from "./Menu";

function AdminDashboard({ children }) {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div>
        <Row>
          <Col lg={2}>
            <Menu />
          </Col>
          <Col lg={10}>{children}</Col>
        </Row>
      </div>
    </div>
  );
}

export default AdminDashboard;
