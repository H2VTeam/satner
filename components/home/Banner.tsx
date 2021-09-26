import React from 'react';
import {
  Col,
  Container,
  Row,
  Button,
  Image,
} from 'react-bootstrap';

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col md={7} className="banner_left">
            <h3>Hello</h3>
            <h1>I am Rahi Satner</h1>
            <h5>Senior WordPress Developer</h5>
            <Button>Hire me</Button>
            <Button>Get cv</Button>
          </Col>
          <Col md={5} className="banner_right">
            <div className="banner_right_img">
              <img src="/images/banner_right.webp" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
