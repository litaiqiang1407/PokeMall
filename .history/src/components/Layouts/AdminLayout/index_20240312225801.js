import { Row } from "react-bootstrap";
import Header from "../Components/Header";

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <Row></Row>
      </div>
    </div>
  );
}

export default AdminLayout;
