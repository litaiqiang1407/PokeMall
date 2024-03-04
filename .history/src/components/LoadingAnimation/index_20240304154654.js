import { Container } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./LoadingAnimation.module.scss";

const cx = classNames.bind(styles);

function LoadingAnimation() {
  return <Container className={cx("container")}>Loading</Container>;
}

export default LoadingAnimation;
