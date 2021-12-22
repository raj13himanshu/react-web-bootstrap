import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Gallery from './pages/Gallery';


const Navbar = () => {
    return (
      <>
        <section className="navbar-bg">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-text-capitalize">
            <NavLink className="navbar-brand" to="/">
              RajSingh
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link text-capitalize" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-capitalize" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-capitalize" to="/service">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-capitalize" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link text-capitalize dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </NavLink>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink className="dropdown-item" to="/gallery">
                      My works
                    </NavLink>
                    <a
                      className="dropdown-item"
                      href="https://drive.google.com/file/d/1A3kbr6Lyd74zDHi0ZyD9ZVDOqPhkLDh4/view?usp=drivesdk"
                    >
                      My Resume
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="https://raj13himanshu.blogspot.com/"
                    >
                      MY Blogs
                    </a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </section>
      </>
    );
}

export default Navbar;
