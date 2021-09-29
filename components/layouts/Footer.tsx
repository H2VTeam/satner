import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { GrFacebookOption } from '@react-icons/all-files/gr/GrFacebookOption';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import { AiOutlineDribbble } from '@react-icons/all-files/ai/AiOutlineDribbble';
import { AiOutlineBehance } from '@react-icons/all-files/ai/AiOutlineBehance';
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart';

const Footer: React.FC = () => {
  const year: number = 2021;
  return (
    <div className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className="footer_logo">
              <Link href="#">
                <img
                  src="/images/logo.webp"
                  alt="logo.png"
                />
              </Link>
              <h4>Follow me</h4>
            </div>
            <div className="footer_social">
              <a href="#">
                <GrFacebookOption />
              </a>
              <a href="#">
                <AiOutlineTwitter />
              </a>
              <a href="#">
                <AiOutlineDribbble />
              </a>
              <a href="#">
                <AiOutlineBehance />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="footer_bottom justify-content-center">
          <Col className="footer_text" lg={8} sm={12}>
            <p>
              Copyright © {year} 2021 All rights reserved |
              This template is made with by{' '}
              <AiOutlineHeart />{' '}
              <a href="https://colorlib.com/">Colorlib</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
