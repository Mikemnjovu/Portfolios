import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <div className="d-flex  flex-row text-center margin-center justify-content-around ">
        <div className=" margin-top">
          <h5 className="">Portfolios</h5>
          <p>We Show Case the you... </p>
        </div>
        <div className="margin-top">
          <h5 className="">Get Started</h5>
          <p>Get access to your full Training and Marketing Suite.</p>
          <a className="btn btn-outline-light" href="#">
            Register Now
          </a>
        </div>
      </div>

      <div className="footer-copyright margin-bottom p-0">
        <div className="container-md ">
          <div className="text-center ">
            <p>Copyright Portfolios © 2020. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
