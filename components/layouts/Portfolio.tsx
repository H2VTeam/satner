import React from 'react';
import { Container } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <div className="_banner">
      <Container>
        <div className="_text">
          <h2>Portfolio</h2>
          <a href="/">Home</a>
          <a href="/portfolio">Portfolio</a>
        </div>
      </Container>
    </div>
  );
};

export default About;
