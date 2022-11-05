// import Carousel from 'react-bootstrap/Carousel';

import Carousel from 'react-bootstrap/Carousel';

import check_1 from  '../assets/img/check_1.png';
import check_2 from  '../assets/img/check_2.png';

export const CarouselCheck = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-12">
    <Carousel variant="dark" slide={false}>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={check_1}
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={check_2}
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  </div>
</div>
  );
}

