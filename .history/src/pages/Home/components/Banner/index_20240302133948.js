import { Carousel } from "react-bootstrap";

import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className={cx("d-block w-100 img-banner")}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec90fb4-9918-420b-bcbd-a03d3bc35781/de9vssx-7fbe2277-d875-4ee3-9503-cb49c4d6d7f4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJlYzkwZmI0LTk5MTgtNDIwYi1iY2JkLWEwM2QzYmMzNTc4MVwvZGU5dnNzeC03ZmJlMjI3Ny1kODc1LTRlZTMtOTUwMy1jYjQ5YzRkNmQ3ZjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gLRjqUDXZgXISGFyuVNT_o6U3srbCH2Dc9ATZgGPnxc"
          alt="First Banner"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className={cx("d-block w-100 img-banner")}
          src="https://pbs.twimg.com/media/EHh6zmpUEAAhdBm.jpg:large"
          alt="First Banner"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className={cx("d-block w-100 img-banner")}
          src="https://ringsandcoins.com/wp-content/uploads/2016/02/Pokemon-Red-Blue-Banner.jpg"
          alt="First Banner"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className={cx("d-block w-100 img-banner")}
          src="https://4kwallpapers.com/images/wallpapers/pokemon-pikachu-3840x1080-10924.jpg"
          alt="First Banner"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
