import { Container } from "react-bootstrap";

// import Header from "./Header";
// import Footer from "./Footer";
import { Header, Footer } from "../../Layouts/Components";

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
