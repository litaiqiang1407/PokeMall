import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AdminDashboard({ children }) {
  const [activeMenuItem, setActiveMenuItem] = useState({
    name: "Dashboard",
    icon: faChartLine,
  });

  const menuItem = (name, icon) => {
    setActiveMenuItem({ name, icon });
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div>
        <Row>
          <Col lg={2} style={{ padding: "0" }}>
            <Sidebar item={menuItem} />
          </Col>
          <Col lg={10} style={{ padding: "0" }}>
            <Header item={activeMenuItem} />
            {children}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdminDashboard;
