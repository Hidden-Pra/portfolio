import React, { useState, useEffect } from "react";
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import colorSharp from "../assets/img/color-sharp.png";
import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  // Create state for each counter
  const [htmlCounter, setHtmlCounter] = useState(0);
  const [tailwindCounter, setTailwindCounter] = useState(0);
  const [cssCounter, setCssCounter] = useState(0);
  const [jsCounter, setJsCounter] = useState(0);
  const [laravelCounter, setLaravelCounter] = useState(0);

  // Function to create counter effect
  const startCounter = (setter, target) => {
    const intervalId = setInterval(() => {
      setter((prevCounter) => {
        if (prevCounter >= target) {
          clearInterval(intervalId);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 30);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    // Start counters for each skill
    startCounter(setHtmlCounter, 90);
    startCounter(setTailwindCounter, 60);
    startCounter(setCssCounter, 80);
    startCounter(setJsCounter, 75);
    startCounter(setLaravelCounter, 70);
  }, []);

  const responsive = {
    mobile: { breakpoint: { max: 575, min: 0 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 576 }, items: 2 },
    desktop: { breakpoint: { max: 3000, min: 1025 }, items: 3 },
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                I'm proficient in a wide range of technologies, from front-end
                design to back-end development. My toolkit includes [mention key
                skills like HTML, CSS, JavaScript, React, Node.js, etc.],
                <br></br> allowing me to build efficient and visually compelling
                web applications.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  {/* <div className='skill-bar'> */}
                  <div className='outer'>
                    <div className='inner'>
                      <div id='number'>{htmlCounter}%</div>
                    </div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    width='160px'
                    height='160px'
                  >
                    <defs>
                      <linearGradient id='GradientColor'>
                        <stop offset='0%' stopColor='#e91e63' />
                        <stop offset='100%' stopColor='#673ab7' />
                      </linearGradient>
                    </defs>
                    <circle
                      className='circle-html'
                      cx='80'
                      cy='80'
                      r='70'
                      strokeLinecap='round'
                    />
                  </svg>
                  {/* </div> */}
                  <h5>HTML</h5>
                </div>

                <div className='item'>
                  {/* <div className='skill-bar'> */}
                  <div className='outer'>
                    <div className='inner'>
                      <div id='number'>{tailwindCounter}%</div>
                    </div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    width='160px'
                    height='160px'
                  >
                    <defs>
                      <linearGradient id='GradientColor'>
                        <stop offset='0%' stopColor='#e91e63' />
                        <stop offset='100%' stopColor='#673ab7' />
                      </linearGradient>
                    </defs>
                    <circle
                      className='circle-tailwind'
                      cx='80'
                      cy='80'
                      r='70'
                      strokeLinecap='round'
                    />
                  </svg>
                  {/* </div> */}
                  <h5>Tailwind</h5>
                </div>

                <div className='item'>
                  {/* <div className='skill-bar'> */}
                  <div className='outer'>
                    <div className='inner'>
                      <div id='number'>{cssCounter}%</div>
                    </div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    width='160px'
                    height='160px'
                  >
                    <defs>
                      <linearGradient id='GradientColor'>
                        <stop offset='0%' stopColor='#e91e63' />
                        <stop offset='100%' stopColor='#673ab7' />
                      </linearGradient>
                    </defs>
                    <circle
                      className='circle-css'
                      cx='80'
                      cy='80'
                      r='70'
                      strokeLinecap='round'
                    />
                  </svg>
                  {/* </div> */}
                  <h5>CSS</h5>
                </div>

                <div className='item'>
                  {/* <div className='skill-bar'> */}
                  <div className='outer'>
                    <div className='inner'>
                      <div id='number'>{jsCounter}%</div>
                    </div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    width='160px'
                    height='160px'
                  >
                    <defs>
                      <linearGradient id='GradientColor'>
                        <stop offset='0%' stopColor='#e91e63' />
                        <stop offset='100%' stopColor='#673ab7' />
                      </linearGradient>
                    </defs>
                    <circle
                      className='circle-js'
                      cx='80'
                      cy='80'
                      r='70'
                      strokeLinecap='round'
                    />
                  </svg>
                  {/* </div> */}
                  <h5>JavaScript</h5>
                </div>

                <div className='item'>
                  {/* <div className='skill-bar'> */}
                  <div className='outer'>
                    <div className='inner'>
                      <div id='number'>{laravelCounter}%</div>
                    </div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    width='160px'
                    height='160px'
                  >
                    <defs>
                      <linearGradient id='GradientColor'>
                        <stop offset='0%' stopColor='#e91e63' />
                        <stop offset='100%' stopColor='#673ab7' />
                      </linearGradient>
                    </defs>
                    <circle
                      className='circle-laravel'
                      cx='80'
                      cy='80'
                      r='70'
                      strokeLinecap='round'
                    />
                  </svg>
                  {/* </div> */}
                  <h5>Laravel</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className='background-image-left' src={colorSharp} alt='Image' /> */}
    </section>
  );
};
