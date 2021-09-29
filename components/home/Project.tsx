import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';
import Link from 'next/link';
import project from '../../pages/api/project';

const axios = require('axios');

type Project = {
  _id: string;
  image: string;
  name: string;
  content: string;
  type: string[];
};

const Project: React.FC = () => {
  const [filters, setFilters] = useState([
    'popular',
    'latest',
    'following',
    'upcoming',
  ]);

  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');

  const getProjects = async () => {
    const res = await axios.get('/api/project');
    setProjects(res.data.projects);
  };

  const getProject = () => {
    if (filter === 'all') {
      return projects;
    } else {
      const temp = projects.filter((project) => {
        let a: boolean = false;
        project.type.map((type) => {
          if (type == filter) {
            a = true;
          }
        });
        return a;
      });
      return temp;
    }
  };

  useMemo(() => {
    getProjects();
    console.log('okokok');
  }, []);

  return (
    <div className="project">
      <Container>
        <Row className="project_title">
          <Col lg={12}>
            <h2>
              quality work
              <br />
              Recently done project
            </h2>
          </Col>
        </Row>
        <div className="project_filter">
          <Nav variant="tabs" defaultActiveKey="#">
            <Nav.Item>
              <Nav.Link
                onClick={() => setFilter('all')}
                href="#"
              >
                All
              </Nav.Link>
            </Nav.Item>
            {filters.map((filter) => {
              return (
                <Nav.Item>
                  <Nav.Link
                    onClick={() => setFilter(filter)}
                    eventKey={filter}
                  >
                    {filter}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </div>
        <Row className="project_content">
          {getProject().map((project) => {
            return (
              <Col lg={4} md={6} className="project_item">
                <div className="img">
                  <img
                    src={'images/project/' + project.image}
                    alt={project.name}
                  />
                  <div className="overlay"></div>
                  <AiOutlinePlus />
                </div>
                <div className="text">
                  <h4>
                    <Link href="#">{project.name}</Link>
                  </h4>
                  <p>{project.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Project;
