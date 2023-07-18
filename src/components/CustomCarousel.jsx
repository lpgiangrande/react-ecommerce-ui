import { Carousel, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import styles from "../assets/css/App.module.scss";

export default function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return ( <div>Carousel</div>
    // <div className={styles.carousel}>
    //   <Row>
    //     <Col lg={12}>
    //       <Carousel activeIndex={index} onSelect={handleSelect}>
    //         <Carousel.Item>
    //           <img
    //             className={`d-block img-fluid w-100 ${styles.carouselImage}`}
    //             src="/public/images/image-product-1.jpg"
    //             alt="First slide"
    //           />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className={`d-block img-fluid w-100 ${styles.carouselImage}`}
    //             src="/public/images/image-product-2.jpg"
    //             alt="Second slide"
    //           />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className={`d-block img-fluid w-100 ${styles.carouselImage}`}
    //             src="/public/images/image-product-3.jpg"
    //             alt="Third slide"
    //           />
    //         </Carousel.Item>
    //         <Carousel.Item>
    //           <img
    //             className={`d-block img-fluid w-100 ${styles.carouselImage}`}
    //             src="/public/images/image-product-4.jpg"
    //             alt="Fourth slide"
    //           />
    //         </Carousel.Item>
    //       </Carousel>
    //     </Col>
    //   </Row>
    //   <Row className={`d-flex justify-content-center ${styles.thumbnailContainer}`}>
    //     <Col className={`px-0 ${styles.thumbnailCol}`}>
    //       <img
    //         className={`thumbnail ${index === 0 ? styles.highlightedThumbnail : ''}`}
    //         src="/public/images/image-product-1-thumbnail.jpg"
    //         alt="Thumbnail 1"
    //         onClick={() => handleSelect(0)}
    //       />
    //     </Col>
    //     <Col className={`px-0 ${styles.thumbnailCol}`}>
    //       <img
    //         className={`thumbnail ${index === 1 ? styles.highlightedThumbnail : ''}`}
    //         src="/public/images/image-product-2-thumbnail.jpg"
    //         alt="Thumbnail 2"
    //         onClick={() => handleSelect(1)}
    //       />
    //     </Col>
    //     <Col className={`px-0 ${styles.thumbnailCol}`}>
    //       <img
    //         className={`thumbnail ${index === 2 ? styles.highlightedThumbnail : ''}`}
    //         src="/public/images/image-product-3-thumbnail.jpg"
    //         alt="Thumbnail 3"
    //         onClick={() => handleSelect(2)}
    //       />
    //     </Col>
    //     <Col className={`px-0 ${styles.thumbnailCol}`}>
    //       <img
    //         className={`thumbnail ${index === 3 ? styles.highlightedThumbnail : ''}`}
    //         src="/public/images/image-product-4-thumbnail.jpg"
    //         alt="Thumbnail 4"
    //         onClick={() => handleSelect(3)}
    //       />
    //     </Col>
    //   </Row>
    // </div>
  );
}
