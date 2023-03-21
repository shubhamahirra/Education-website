import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import './footer.css'
import { AiOutlineTwitter } from "react-icons/ai";


import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <div>
    {/* Footer Start */}
    <div className="container-fluid bg-dark text-light mt-5 py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
      <div className="container pt-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Home</a>
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />About Us</a>
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Our Services</a>
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Latest Blog</a>
              <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2" />Contact Us</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Popular Links</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Home</a>
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />About Us</a>
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Our Services</a>
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Latest Blog</a>
              <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2" />Contact Us</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2" />123 Mumbai, Maharashtra, INDIA</p>
            <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2" />coursdeck@gmail.com</p>
            <p className="mb-0"><i className="bi bi-telephone text-primary me-2" />+012 345 67890</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="d-flex">
              <a className="btn btn-lg btn-secondary btn-lg-square rounded me-2" href="#"><i className="fab fa-facebook-f fw-normal" /><AiOutlineTwitter/></a>
              <a className="btn btn-lg btn-secondary btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal" /><FaFacebookF/></a>
              <a className="btn btn-lg btn-secondary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal" />
              <FaInstagram/></a>
            </div>
          </div>
          <div className="col-12">
            <form className="mx-auto" style={{maxWidth: '600px'}}>
              <div className="input-group">
                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                <button className="btn btn-primary px-4">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bg-secondary text-light py-4">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-md-0">© <a className="text-white border-bottom" href="#">Coursdeck</a>. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">Designed by Shubham <a className="text-white border-bottom">Shubham Ahirrao</a></p>
          </div>
        </div>
      </div>
    </div>
    {/* Footer End */}
  </div>

  );
};

export default Footer;
