import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";
import { BiCheckShield } from 'react-icons/bi';
import { BiMessageSquareCheck } from 'react-icons/bi';

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Welcome to Coursdeck</h2>
              <p>
                Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training
              </p>
              <div className="cate">
              <h3>
                <BiCheckShield/>Safe & Secured
              </h3><p>Safe and Secured our services and every step of process</p>
              </div>
              <div className="cate">
              <h3>
              <BiMessageSquareCheck/>Highly Expert Instructors
              
              </h3>
              
              <p>There are best instructer which are highly qualified</p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
