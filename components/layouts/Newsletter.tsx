import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Newsletter: React.FC = () => {
  return (
    <div className="newletter">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={12}>
            <div className="text-center">
              <h2>GET UPDATE FROM ANYWHERE</h2>
              <p>
                Bearing Void gathering light light his
                eavening unto dont afraid.
              </p>
              <div className="subcribe">
                <form action="#" target="_blank">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  <input
                    type="button"
                    value="get started"
                  />
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
