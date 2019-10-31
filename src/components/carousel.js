import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../css/carouselStyle.css'

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel style={{ height: '30vh', width: '100%' }} activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="item1 w-100"
          // src="https://file.hstatic.net/1000360860/file/56.1_8fc931e9ecee47cc8a3cd90331c9bb2b_grande.png"
          src="https://i.pinimg.com/236x/5f/ad/a8/5fada8ba8e64dc2c9f029cd5d9b3bf17.jpg"
          alt="trasua1"
        />
        <Carousel.Caption>
          <h3>Toẹt vời</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '80vh' }}
          className="item2 w-100"
          src="https://trasuakoithe.com/wp-content/uploads/2019/06/61406893_2648778605135522_8625186846046945280_o.jpg"
          alt="trasua2"
        />

        <Carousel.Caption>
          <h3>Sảng khoái</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '80vh' }}
          className="item3 w-100"
          src="https://i.pinimg.com/236x/bd/5f/4a/bd5f4a136312aa0cc3fea5dd3925bee2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Yolo</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
