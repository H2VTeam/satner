import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoCall } from '@react-icons/all-files/io5/IoCall';

const Brand: React.FC = () => {
  return (
    <div className="brand">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} className="brand_left">
            <Row>
              <Col lg={4} md={4} sm={6}>
                <div className="brand_img">
                  <img
                    src="/images/brand/1.webp"
                    alt="brand"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className="brand_img">
                  <img
                    src="/images/brand/2.webp"
                    alt="travel"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className="brand_img">
                  <img
                    src="/images/brand/3.webp"
                    alt="travel"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className="brand_img">
                  <img
                    src="/images/brand/4.webp"
                    alt="travel"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className="brand_img">
                  <img
                    src="/images/brand/5.webp"
                    alt="travel"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className="brand_img">
                  <img
                    src="/images/brand/6.webp"
                    alt="travel"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className="brand_img">
                  <img
                    src="/images/brand/7.webp"
                    alt="travel"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className="brand_img">
                  <img
                    src="/images/brand/8.webp"
                    alt="travel"
                  />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className="brand_img">
                  <img
                    src="/images/brand/9.webp"
                    alt="travel"
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={6} className="brand_right">
            <div className="info">
              <span className="info_num">10</span>
              <span className="info_text">
                Years Experience Working
              </span>
            </div>
            <div className="brand_contact">
              <IoCall />
              <div className="call_num">
                <p>Call Us Now</p>
                <h3>(+1)-800-555-6789</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Brand;
