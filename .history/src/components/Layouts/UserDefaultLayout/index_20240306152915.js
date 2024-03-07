import { Container } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";

function UserDefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ padding: 0 }}>
        <Container fluid style={{ backgroundColor: "rgba(250, 214, 30, 0.1)" }}>
          {children}
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default UserDefaultLayout;
