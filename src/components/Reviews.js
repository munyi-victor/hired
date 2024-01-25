import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Reviews = () => {
  return (
    <div className="reviews">
      <center>
        <h4>Here is what our clients say about us.</h4>
      </center>

      <Container className="container">
        <Carousel>
          <Carousel.Item>
            <div className="review-info">
              <h5>John Doe</h5>
              <p>These guys are the best in every aspect.</p>
              <div className="stars"></div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="review-info">
              <h5>Jane Smith</h5>
              <p>These guys are the best in every aspect.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="review-info">
              <h5>Munyi Victor</h5>
              <p>These guys are the best in every aspect.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Reviews;