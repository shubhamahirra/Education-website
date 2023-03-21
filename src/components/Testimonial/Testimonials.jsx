import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import feedback1 from "../../assests/images/feedback1.jpg";
import feedback2 from "../../assests/images/feedback2.jpg";
import feedback3 from "../../assests/images/feedback3.jpg";
import feedback4 from "../../assests/images/feedback4.jpg";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section className="testi">
      <Container>
        <Row>
          <Col lg="10" md="12" className="parent">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              

              <div className="testimonial__content w-100">
                <h2 className="mb-3">Students feedback</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p className="reviews">
                      I really enjoy the hands-on activities and projects in this class. They help me understand the material better and make learning more enjoyable.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p className="reviews">California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p className="reviews">
                      I appreciate the extra help and support the teacher offers in the online class. It has really helped me improve my grades.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p className="reviews">California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p className="reviews">
                      I really enjoy the hands-on activities and projects we do in this class. They make the material more interesting and help me understand it better.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p className="reviews">California, United State</p>
                        
                      </div>
                    </div>
                  </div>
                </Slider>
                
              </div>
            </div>
            <div className="testi_images">
            <div className="testimonial__img">
                <img src={feedback1} alt="" className="w-100" />
              </div>
              <div className="testimonial__img1">
                <img src={feedback2} alt="" className="w-100" />
              </div>
              <div className="testimonial__img2">
                <img src={feedback3} alt="" className="w-100" />
              </div>
              <div className="testimonial__img3">
                <img src={feedback4} alt="" className="w-100" />
              </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
