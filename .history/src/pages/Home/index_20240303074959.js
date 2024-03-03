import { Container } from "react-bootstrap";
import Banner from "./components/Banner";
import Types from "./components/Types";

function Home() {
  return (
    <Container fluid>
      <Banner />
      <Types />
    </Container>
  );
}

export default Home;
