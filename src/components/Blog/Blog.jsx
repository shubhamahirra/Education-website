import React from 'react'
import Blog1 from "../../assests/images/blog1.jpg";
import Blog2 from "../../assests/images/blog2.jpg";
import Blog3 from "../../assests/images/blog3.jpg";
import './Blog.css';

const Blog = () => {
  return (
    <div className="container-fluid p-5 BLOG" id='blog'>
    <div className="mb-5 text-center">
      <h5 className="text-primary text-uppercase">Our Blog</h5>
      <h1 className="display-3 text-uppercase mb-0">Latest Blog Post</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-4">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src={Blog1}alt="" />
          </div>
          <div className="bg-secondary d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-light text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 text-uppercase text-light" href>Coursdeck Going to launch new program</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src={Blog2} alt="" />
          </div>
          <div className="bg-secondary d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-light text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 text-uppercase text-light blog1" href>Online Student have less stress than offline students</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src={Blog3} alt="" />
          </div>
          <div className="bg-secondary d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-light text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 text-uppercase text-light" href>Azure new course is here, the course will be free first</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blog
