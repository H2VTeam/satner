import React, { useState, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';

const axios = require('axios');

type Setting = {
  dots: boolean;
  infinite: boolean;
  speed: number;
  autoplay: boolean;
  slidesToShow: number;
  slidesToScroll: number;
};

type Review = {
  _id: string;
  image: string;
  name: string;
  content: string;
};

const Testimonial: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const settings: Setting = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const getReview = async () => {
    const res = await axios.get('/api/review');
    setReviews(res.data.reviewList);
  };

  useMemo(() => {
    getReview();
  }, []);

  return (
    <div className="testimonial">
      <Container>
        <Row className="test_title">
          <Col lg={8}>
            <h2>client say about me</h2>
            <p>
              Is give may shall likeness made yielding
              spirit a itself togeth created after sea is in
              beast
              <br />
              beginning signs open god you're gathering ithe
            </p>
          </Col>
        </Row>
        <div className="test_list">
          <Slider {...settings}>
            {reviews.map((review) => {
              return (
                <div>
                  <Row className="test_item">
                    <Col lg={4}>
                      <img
                        src={
                          '/images/review/' + review.image
                        }
                        alt={review.name}
                      />
                    </Col>
                    <Col lg={8}>
                      <h4>{review.name}</h4>
                      <p>{review.content}</p>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
