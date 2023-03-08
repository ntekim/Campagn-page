import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../../public/one.jpeg'
import Img2 from '../../../public/two.jpeg'
import Img3 from '../../../public/three.jpeg'
import Image from 'next/image'
import style from './carousel.module.css'


function MainPageCarousel() {

    // let images = [
    //     {
    //         "name": Img1,
    //         "Header": ""
    //     }
    // ]

  return (
    <Carousel id={style.MainPageCarousel}>
        {/* {images.forEach

        } */}
      <Carousel.Item interval={1000}>
        <Image id={style.MainPageCarouselImage}
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainPageCarousel;