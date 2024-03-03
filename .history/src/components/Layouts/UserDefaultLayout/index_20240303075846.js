import { Container } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";

function UserDefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Container fluid>{children}</Container>
      <Footer />
    </div>
  );
}

export default UserDefaultLayout;
