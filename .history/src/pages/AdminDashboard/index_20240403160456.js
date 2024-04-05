import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AdminDashboard({ children }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const menuItem = (name) => {
    setActiveMenu(name);
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div>
        <Row>
          <Col lg={2} style={{ padding: "0" }}>
            <Sidebar item={menuItem} />
          </Col>
          <Col lg={10} style={{ padding: "0" }}>
            <Header item={activeMenu} />
            {children}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdminDashboard;
