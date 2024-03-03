import { Container } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";

function UserDefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <Container fluid style={{ padding: 0 }}>
          {children}
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default UserDefaultLayout;
