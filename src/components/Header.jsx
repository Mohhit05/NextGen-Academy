import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-end">
        <NavLink to="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename"><span><i className="bi bi-mortarboard-fill"></i></span>{process.env.REACT_APP_SITE_NAME}</h1>
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>

            <li className="dropdown">
              <a href="#">
                <span>About</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/admissions">Admissions</NavLink>
                </li>
                <li>
                  <NavLink to="/academics">Academics</NavLink>
                </li>
                <li>
                  <NavLink to="/faculty-staff">Faculty &amp; Staff</NavLink>
                </li>
                <li>
                  <NavLink to="/campus-facilities">
                    Campus &amp; Facilities
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/students-life">Students Life</NavLink>
            </li>
            <li>
              <NavLink to="/alumni">Alumni</NavLink>
            </li>

            <li className="dropdown">
              <a href="#">
                <span>News</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <NavLink to="/news">Latest News</NavLink>
                </li>
                <li>
                  <NavLink to="/news-details">News Details</NavLink>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#">
                <span>Events</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <NavLink to="/events">Upcoming Events</NavLink>
                </li>
                <li>
                  <NavLink to="/event-details">Event Details</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            {/* <li className="dropdown">
              <a href="#">
                <img
                  src="/assets/img/person/person-m-4.webp" // Replace with dynamic or default image path
                  alt="person"
                  className="rounded-circle"
                  width="32"
                  height="32"
                  style={{ objectFit: "cover", marginRight: "8px" }}
                />
                <span>John Doe</span>{" "}
                 
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <NavLink to="/my-account">My Account</NavLink>
                </li>
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </ul>
            </li> */}

            <li>
              <NavLink className="btn ms-3 px-4 py-2 rounded-pill " style={{ backgroundColor: "var(--accent-color)", color: "white" }} to="/signin">SignIn</NavLink>
            </li>
            
          </ul>
          
        </nav>
        {/* Mobile Toggle Button */}
        <button className="btn d-block d-xl-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav" aria-controls="mobileNav">
          <i className="bi bi-list fs-3 text-black"></i>
        </button>

        {/* Offcanvas Mobile Menu */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileNav" aria-labelledby="mobileNavLabel">
          <div className="offcanvas-header" style={{ backgroundColor: "var(--accent-color)" }}> 
            <button type="button" className="btn-close text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div> 
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li><NavLink to="/" className="nav-link" data-bs-dismiss="offcanvas">Home</NavLink></li>

              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">About</a>
                <ul className="dropdown-menu w-100">
                  <li><NavLink to="/about" className="dropdown-item" data-bs-dismiss="offcanvas">About Us</NavLink></li>
                  <li><NavLink to="/admissions" className="dropdown-item" data-bs-dismiss="offcanvas">Admissions</NavLink></li>
                  <li><NavLink to="/academics" className="dropdown-item" data-bs-dismiss="offcanvas">Academics</NavLink></li>
                  <li><NavLink to="/faculty-staff" className="dropdown-item" data-bs-dismiss="offcanvas">Faculty & Staff</NavLink></li>
                  <li><NavLink to="/campus-facilities" className="dropdown-item" data-bs-dismiss="offcanvas">Campus & Facilities</NavLink></li>
                </ul>
              </li>

              <li><NavLink to="/students-life" className="nav-link" data-bs-dismiss="offcanvas">Students Life</NavLink></li>
              <li><NavLink to="/alumni" className="nav-link" data-bs-dismiss="offcanvas">Alumni</NavLink></li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="newsDropdown" role="button" data-bs-toggle="dropdown">News</a>
                <ul className="dropdown-menu w-100">
                  <li><NavLink to="/news" className="dropdown-item" data-bs-dismiss="offcanvas">Latest News</NavLink></li>
                  <li><NavLink to="/news-details" className="dropdown-item" data-bs-dismiss="offcanvas">News Details</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown">Events</a>
                <ul className="dropdown-menu w-100">
                  <li><NavLink to="/events" className="dropdown-item" data-bs-dismiss="offcanvas">Upcoming Events</NavLink></li>
                  <li><NavLink to="/event-details" className="dropdown-item" data-bs-dismiss="offcanvas">Event Details</NavLink></li>
                </ul>
              </li>

              <li><NavLink to="/contact" className="nav-link" data-bs-dismiss="offcanvas">Contact</NavLink></li>

              <li className="mt-3">
                <NavLink className="btn w-100 rounded-pill" style={{ backgroundColor: "var(--accent-color)", color: "white" }} to="/signin" data-bs-dismiss="offcanvas">SignIn</NavLink>
              </li>
            </ul>
          </div>
          </div>
      </div>
    </header>
  );
}
