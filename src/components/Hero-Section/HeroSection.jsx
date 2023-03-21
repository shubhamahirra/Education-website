import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img4.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="heros">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Professional <br /> Learning <br /> At Your Home
              </h2>
            
              <p className="mb-5 para">
                Helping People and children learn in ways that are easier
              </p>
              
            </div>
            <div className="search">
              
              {/* <button className="btn">Explore More</button> */}
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
