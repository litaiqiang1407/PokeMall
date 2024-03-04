import { Container } from "react-bootstrap";

function LoadingAnimation() {
  return (
    <Container className={cx(container)}>
      <Container className={cx("main-ball")}>
        <Container className={cx("poke-button")}></Container>
      </Container>
    </Container>
  );
}

export default LoadingAnimation;
