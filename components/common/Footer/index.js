import React from "react";

export const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div id="footer">
      <div className="container">
        <div className="subscribe-box">
          <div className="subscribe-title">
            Register now so you don't miss our programs
          </div>
          <div className="subscribe-form">
            <input
              type="text"
              name="subscribe"
              className="form-control form-input"
              placeholder="Enter your email"
            />
            <button>Subscribe Now</button>
          </div>
        </div>
        <div className="footer-menu">
          <div className="menu">
            <span>Menu</span>
            <span>Category</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="sosmed">
            <i className="fa fa-facebook-square"></i>
            <i className="fa fa-twitter-square"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-youtube-square"></i>
          </div>
        </div>
        <div className="footer-format">
          <div className="footer-copyright">
            &copy; {getYear()} (Gaga) Evermos. All rights reserved.
          </div>
          <div className="footer-image-logo">
            <img src="/images/evermos-logo.png" alt="logo" />
          </div>
          <div className="term-condition">
            <span>Term of Services</span>
            <span>Privacy Police</span>
          </div>
        </div>
      </div>
    </div>
  );
};
