import { Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AdminDashboard({ children }) {
  const menuItem = (name) => {
    return name;
  };

  const getItem = () => {
    menuItem;
  };
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div>
        <Row>
          <Col lg={2}>
            <Sidebar item={menuItem} />
          </Col>
          <Col lg={10}>
            <Header />
            {children}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdminDashboard;
