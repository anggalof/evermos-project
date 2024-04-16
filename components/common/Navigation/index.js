import { useState } from "react";
import Link from "next/link";
import NavbarMenu from "../NavbarMenu";

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(true)
  };

  const handleCloseModal = () => {
    setOpen(false)
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <div className="navbar__header">
            <a href="/" className="navbar__header-link">
              <img src="/images/evermos-logo.png" alt="Logo" />
            </a>
            <div className="navbar__header-menu">
              <div className="navbar__header-show">
                <NavbarMenu />
              </div>

              <div
                className="navbar__toggle"
                onClick={handleToggle}
              >
                <svg className="navbar__toggle-size" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </div>

              <div
                className={`${isOpen ? 'block' : 'hidden'} `}
              >
                <div
                  className={`${isOpen && 'navbar__overlay'}`}
                  onClick={handleCloseModal}
                ></div>
                <div className="navbar__menu-open">
                  <NavbarMenu />
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="nav-header">
            <a href="/">
              <img src="/images/evermos-logo.png" alt="logo" />
            </a>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-search-icon">
            <i className="fa fa-search"></i>
          </div>

          <div className="nav-links">
            <a href="/" target="_blank">Home</a>
            <a href="/" target="_blank">Category</a>
            <a href="/" target="_blank">About</a>
            <a href="/" target="_blank">Contact</a>

            <div className="nav-search">
              <div className="form-search">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  name="search"
                  className="form-control form-input"
                  placeholder="Search something here!"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="rectangle-navbar"></div>
    </div>
  );
};
