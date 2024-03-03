import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={500}></Carousel.Item>
      <Carousel.Item interval={500}></Carousel.Item>
      <Carousel.Item interval={500}></Carousel.Item>
      <Carousel.Item interval={500}></Carousel.Item>
    </Carousel>
  );
}

export default Banner;
