import React from 'react';
import {
  Col,
  Container,
  Row,
  Button,
} from 'react-bootstrap';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="about_home">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="about_img">
              <img
                src="/images/about_home.webp"
                alt="about_home"
              />
            </div>
          </Col>
          <Col lg={5} className="about_right">
            <div className="text_left">
              <h2>
                Let's <br /> Introduce About <br /> My Self
              </h2>
              <p>
                Whose given. Were gathered. There first
                subdue greater. Bearing you Whales heaven
                midst their. Beast creepeth. Fish days.
              </p>
              <p>
                Is give may shall likeness made yielding
                spirit a itself together created after sea
                is in beast beginning signs open god you're
                gathering whose gathered cattle let.
                Creature whales fruit unto meat the life
                beginning all in under give two.
              </p>
              <Link href="#">
                <Button>Download CV</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
