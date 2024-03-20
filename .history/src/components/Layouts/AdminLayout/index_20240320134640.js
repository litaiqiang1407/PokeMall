import { Container } from "react-bootstrap";

function AdminLayout({ children }) {
  return (
    <div>
      <Container fluid></Container>
      <div style={{ padding: 0 }}>{children}</div>
    </div>
  );
}

export default AdminLayout;
