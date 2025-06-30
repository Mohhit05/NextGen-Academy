import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <NavLink to="/" className="logo d-flex align-items-center">
                <span className="sitename">
                  {process.env.REACT_APP_SITE_NAME}
                </span>
              </NavLink>
              <div className="footer-contact pt-3">
                <p>{process.env.REACT_APP_ADDRESS_LINE1}</p>
                <p>{process.env.REACT_APP_ADDRESS_LINE2}</p>
                <p className="mt-3">
                  <strong>Phone:</strong>{" "}
                  <span>{process.env.REACT_APP_PHONE}</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span>{process.env.REACT_APP_EMAIL}</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a
                  href={process.env.REACT_APP_TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  href={process.env.REACT_APP_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href={process.env.REACT_APP_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href={process.env.REACT_APP_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/terms">Terms of Service</NavLink>
                </li>
                <li>
                  <NavLink to="/privacy">Privacy Policy</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Get the latest updates and announcements directly to your inbox.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="d-flex flex-column flex-sm-row"
              >
                <input
                  type="email"
                  name="email"
                  className="form-control me-sm-2 mb-2 mb-sm-0"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "var(--accent-color)",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">
              {process.env.REACT_APP_SITE_NAME}
            </strong>
            <span>All Rights Reserved. {new Date().getFullYear()}</span>
          </p>

          <div className="credits">
            {/* 
              All the links in the footer should remain intact.
              You can delete the links only if you've purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: [buy-url] 
            */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  );
}
