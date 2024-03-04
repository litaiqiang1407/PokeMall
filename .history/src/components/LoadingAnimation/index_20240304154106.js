import { Container } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./LoadingAnimation.module.scss";

const cx = classNames.bind(styles);

function LoadingAnimation() {
  return (
    <Container className={cx("container")}>
      <Container className={cx("main-ball")}>
        <Container className={cx("poke-button")}></Container>
      </Container>
    </Container>
  );
}

export default LoadingAnimation;
