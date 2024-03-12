import { Container } from "react-bootstrap";
import Banner from "./components/Banner";
import Types from "./components/Types";
import Suggestions from "./components/Suggestions";
import Title from "~/components/Title";

function Home() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Title title="Home - PokeMall" />
      <Banner />
      <Types />
      <Suggestions />
    </Container>
  );
}

export default Home;
