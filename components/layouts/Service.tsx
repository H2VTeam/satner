import React from 'react';
import { Container } from 'react-bootstrap';

const Service: React.FC = () => {
  return (
    <div className="_banner">
      <Container>
        <div className="_text">
          <h2>Service</h2>
          <a href="/">Home</a>
          <a href="/service">Service</a>
        </div>
      </Container>
    </div>
  );
};

export default Service;
