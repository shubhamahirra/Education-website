import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Our organizations offer quick learning services, also known as accelerated learning or fast track learning. These programs are designed to help you learn new skills ",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "An all-time support service is a service that is available to assist you with a problem or issue 24 hours a day, 7 days a week.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Our organization that provides certification programs or exams to certify individuals in a particular field or profession.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section className="fea" id="service">
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
