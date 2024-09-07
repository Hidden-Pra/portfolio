import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/banner-bg1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Online Registration System",
      description: "Complete Online Registration System Laravel ",
      imgUrl: projImg1,
    },
    {
      title: "Complain Manage System ",
      description: "Complain Manage System PHP",
      imgUrl: projImg2,
    },
    {
      title: "SN BLUE GAMING CLUB NEPAL",
      description: "Work On SN BLUE GAMING CLUB NEPAL Yii2",
      imgUrl: projImg4,
    },
    {
      title: "Simple College Website",
      description: "Simple College Website HTML,CSS,JS",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg3,
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Take a look at some of my recent work where I've applied my
                    skills to solve real-world problems. Each project showcases
                    my ability to design, develop, and deliver high-quality web
                    solutions.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='section'>
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp2}></img>
    </section>
  );
};
