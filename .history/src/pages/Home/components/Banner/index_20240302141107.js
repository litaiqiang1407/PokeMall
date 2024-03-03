import { Image } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <Image
      className={cx("banner")}
      src="https://ringsandcoins.com/wp-content/uploads/2016/02/Pokemon-Red-Blue-Banner.jpg"
    />
  );
}

export default Banner;
