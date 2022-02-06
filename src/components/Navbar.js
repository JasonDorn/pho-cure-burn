import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Navbar = () => {
  const [navBarActiveClass, setNavbarActiveClass] = useState('');

  const toggleHamburger = () => {
    if (navBarActiveClass.length === 0) {
      setNavbarActiveClass('is-active');
    } else {
      setNavbarActiveClass('');
    }
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="PCB" className='logo' />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            onKeyPress={toggleHamburger}
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Phounders
            </Link>
            <Link className="navbar-item" to="/events">
              Events
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </div>
          <div className="navbar-end column is-4 social">
            <a title="facebook" href="https://www.facebook.com/phocureburn/">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="twitter" href="https://twitter.com/phocureburn">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            <a title="instagram" href="https://www.instagram.com/phocureburn/?hl=en">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: "1em", height: "1em" }}
              />
            </a>
            {/* <Link className="navbar-item" to="/contact"> */}
            {/*   Contact */}
            {/* </Link> */}
            {/* <Link className="navbar-item" to="/contact/examples"> */}
            {/*   Form Examples */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
