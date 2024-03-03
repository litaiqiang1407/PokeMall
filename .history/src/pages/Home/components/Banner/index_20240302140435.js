import { Carousel } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <iframe
          className={cx("video-frame")}
          src="https://www.youtube.com/watch?v=4-NH-6iLwP4"
          allowFullScreen
          title="YouTube Video"
        />
      </Carousel.Item>
      {/* Add more Carousel.Items for additional videos */}
    </Carousel>
  );
}

export default Banner;
