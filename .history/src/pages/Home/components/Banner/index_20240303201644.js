import { Container, Image } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <Container className={cx("banner")}>
      <Image
        className={cx("banner-img")}
        src="https://frostilyte.files.wordpress.com/2023/11/pokemon-banner.png?w=1200"
      />
    </Container>
  );
}

export default Banner;
