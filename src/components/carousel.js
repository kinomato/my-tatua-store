import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel style={{height:'30vh', width:'100%'}} activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block h-100 w-60"
            src="https://file.hstatic.net/1000360860/file/56.1_8fc931e9ecee47cc8a3cd90331c9bb2b_grande.png"
            alt="trasua1"
          />
          <Carousel.Caption>
            <h3>Toẹt vời</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-100 w-60"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6k2NrJkkYYrGeU0cHhU7YLrSI34_ITR7k_NWsbJhydycZ_T5fw&s"
            alt="trasua2"
          />
  
          <Carousel.Caption>
            <h3>Sảng khoái</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-100 w-60"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmD7q6o-Wj8SK2u1gmNXn5-xCFc1buqW7LzXZA7jmBJwEZw3MF&s"
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
