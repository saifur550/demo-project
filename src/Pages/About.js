import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import slider1 from '../assets/images/about.jpg'
import slider2 from '../assets/images/about2.jpg'
import slider3 from '../assets/images/about3.jpg'
import goals from '../assets/images/global.png'

const About = () => {
  return (
    <div id ="about">
      <div className="text-center py-5">
        <h2 className="text-primary fw-bolder">
          About Us
        </h2>

      
      </div>
      <Container>

      <h2 className="fw-bolder text-info">
        Our Vision & Our Mission
        </h2>

        <p className="">
        To make a positive impact and improve the quality of lives by providing the best in healthcare services. We are determined to be a medical provider of choice, delivering quality healthcare services backed by strong core values of professionalism, compassion, integrity and good governance.
        </p>

        <h2 className="fw-bolder text-info">
        Our Corporate Commitments
        </h2>
        
        <div>
          <ul>
            <li>
            To apply professional excellence in providing comprehensive emergency medical services, guided by international standards.
            </li>

            <li>
            To exceed clients’ and patients’ expectations by providing ethical medical service in a timely and cost-effective manner.
            </li>

            <li>
            To recognize every staff member as a valued partner who plays an important role in sustainable growth and profitability; towards the success of the hospital.
            </li>

            <li>
            To contribute positively to the wellness of the community that we service – through activities that promote healthy living, as well as the prevention of environmental abuse.
            </li>
          </ul>
        </div>


      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Pride of our Healthcare </h3>
            <p>Generation after generation.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Special Services</h3>
            <p>Quality, safety and Efficiency.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>The Miracle of life begins here</h3>
            <p>Quality service in maternity care</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
     

      <Container>
        <h2 className="text-info fw-bolder pt-5">
          Our History
        </h2>
  <Row>
    <Col>
    <p className="pt-5">
    Established in 1974, Pantai Hospital Kuala Lumpur (PHKL) is one of the pioneer private hospitals in Klang Valley and a trusted partner in the healthcare journey of its patients for more than 45 years. PHKL has 335 beds and is supported by over 200 specialist doctors.
    </p>

    <p className="">
    PHKL prides on being a one-stop integrated healthcare provider, covering a wide-range of medical and surgical disciplines which are complemented by cutting-edge medical equipment and specialised services.
    </p>


    <p className="">
    PHKL is accredited with Joint Commission International (JCI), Malaysian Society for Quality in Health (MSQH) and certified as a Baby Friendly Hospital. In addition, PHKL is officially ‘WHO’s Preferred Hospitals’ in Malaysia.
    </p>

    <img className="img-fluid" src={goals} alt="" />
    </Col>
  </Row>
</Container>

    </div>
  );
};

export default About;