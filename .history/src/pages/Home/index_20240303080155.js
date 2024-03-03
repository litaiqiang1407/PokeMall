import { Container } from "react-bootstrap";
import Banner from "./components/Banner";
import Types from "./components/Types";

function Home() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Banner />
      <Types />
    </Container>
  );
}

export default Home;
