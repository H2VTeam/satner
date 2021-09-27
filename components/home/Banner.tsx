import React from 'react';
import {
  Col,
  Container,
  Row,
  Button,
  Image,
} from 'react-bootstrap';
import Link from 'next/link';

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col lg={7} className="banner_left">
            <h3>Hello</h3>
            <h1>I am Rahi Satner</h1>
            <h5>Senior WordPress Developer</h5>
            <Link href="#">
              <Button>Hire me</Button>
            </Link>
            <Link href="#">
              <Button>Get cv</Button>
            </Link>
          </Col>
          <Col lg={5} className="banner_right">
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
