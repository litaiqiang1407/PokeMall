import { Header, Footer } from "../../Layouts/Components";

import { Container } from "react-bootstrap";

function UserDefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ padding: 0 }}>
        <Container fluid>{children}</Container>
      </div>
      <Footer />
    </div>
  );
}

export default UserDefaultLayout;
