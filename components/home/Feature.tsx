import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Feature: React.FC = () => {
  return (
    <div className="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="feature_title">
            <h2>Servive offers</h2>
            <p>
              Is give may shall likeness made yielding
              spirit a itself togeth created after sea
              <br /> is in beast beginning signs open god
              you're gathering ithe
            </p>
          </Col>
        </Row>
        <Row className="feature_inner">
          <Col lg={3} md={6} className="feature_item">
            <div className="feature__item">
              <img
                src="images/feature/1.webp"
                alt="feature"
              />
              <h4>WP DEVELOPING</h4>
              <p>
                Creeping for female light years that lesser
                can't evening heaven isn't bearing tree
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="feature_item">
            <div className="feature__item">
              <img
                src="images/feature/2.webp"
                alt="feature"
              />
              <h4>UI/UX DESIGN</h4>
              <p>
                Creeping for female light years that lesser
                can't evening heaven isn't bearing tree
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="feature_item">
            <div className="feature__item">
              <img
                src="images/feature/3.webp"
                alt="feature"
              />
              <h4>Web Design</h4>
              <p>
                Creeping for female light years that lesser
                can't evening heaven isn't bearing tree
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} className="feature_item">
            <div className="feature__item">
              <img
                src="images/feature/4.webp"
                alt="feature"
              />
              <h4>SEO OPTIMIZE</h4>
              <p>
                Creeping for female light years that lesser
                can't evening heaven isn't bearing tree
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feature;
