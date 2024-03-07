import { Container } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./LoadingAnimation.module.scss";

const cx = classNames.bind(styles);

function LoadingAnimation() {
  return (
    <Container style={{ height: 220 }}>
      <Container className={cx("loader")}></Container>
    </Container>
  );
}

export default LoadingAnimation;
