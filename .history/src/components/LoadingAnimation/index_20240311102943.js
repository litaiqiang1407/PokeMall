import { Container } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./LoadingAnimation.module.scss";

const cx = classNames.bind(styles);

const LoadingAnimation = React.memo() {
  return (
    <Container className={cx("animation")}>
      <Container className={cx("loader")}></Container>
    </Container>
  );
}

export default LoadingAnimation;
