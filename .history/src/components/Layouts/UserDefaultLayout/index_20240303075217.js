import { Container } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";

function UserDefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Container fluid className="container">
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default UserDefaultLayout;
