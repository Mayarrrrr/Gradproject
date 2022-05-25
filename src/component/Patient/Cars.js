import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import Def from '../../img/def.png';
import Child from '../../img/child.png';
import Type from '../../img/type.png';



const Cars = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel >
        <Carousel.Item interval={1000}>
            <center>
          <img
            className="d-block w-50"
            src={Def}
            alt="First slide"
            height={500}
            
          /> </center>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <center>
          <img
            className="d-block w-50"
            src={Type}
            alt="Second slide"
          /> </center>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <center>
          <img
            className="d-block w-50"
            src={Child}
            alt="Third slide"
            height={400}
          />
          </center>
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Cars;
