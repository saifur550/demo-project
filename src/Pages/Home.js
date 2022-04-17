import React from "react";
import BgTop from "../assets/images/sectionBg2.jpg";
import { Container, } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import { NavLink } from "react-router-dom";

import Services from "../Components/Services/Services";



const Home = () => {


  return (
    <div>
      <div 
        style={{
          background: ` linear-gradient(
           #00000049,
           #00000049
          ), url(${BgTop})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition:'top 40px',
          backgroundSize: "cover",
        }}>
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-start align-items-center">
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white fw-bolder title"  style={{ fontSize: "4rem" }} >
                  Caring.  <br /> collaborative. <br /> Careers</h1>
              </Bounce>

              <Bounce right cascade>
                <h5 className="my-4 text-white fs-5 fw-normal">
                “Healing is a matter of time,  <br /> 
                but it is sometimes also a matter of opportunity.” <br/>
                — Hippocrates
                </h5>
              </Bounce>

              <Bounce>
                <NavLink
                  to ="/services"
                  className="rounded-pill fs-5 py-2 px-4 btn btn-primary"
                  variant="primary">
                  View Services
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
    
    <Services></Services>
    </div>
  );
};

export default Home;