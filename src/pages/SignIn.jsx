import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Column - Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-5 position-relative">
          {/* Back to Home */}
          <Link
            to="/"
            className="mb-4 text-decoration-none d-flex align-items-center"
            style={{
              color: "var(--accent-color)",
              position: "absolute",
              top: "20px",
              left: "30px",
            }}
          >
            <i className="bi bi-arrow-left me-2"></i> Back to Home
          </Link>

          <div className="d-flex flex-column align-items-center w-100">
            <h2
              className="mb-4 fw-bold"
              style={{ color: "var(--accent-color)", marginTop: "60px" }}
            >
              Sign In
            </h2>

            <form className="w-100" style={{ maxWidth: "450px" }}>
              {/* Role Dropdown */}
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="role">
                  Select Role
                </label>
                <select className="form-select" id="role" required>
                  <option value="">-- Choose Role --</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="principal">Principal</option>
                </select>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                className="btn w-100"
                type="submit"
                style={{
                  backgroundColor: "var(--accent-color)",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                <i className="fas fa-sign-in-alt me-2"></i>
                Sign In
              </button>

              {/* Forgot Password */}
              <div className="mt-3 text-center">
                <Link
                  to="/forgot-password"
                  className="text-decoration-none"
                  style={{ color: "var(--accent-color)" }}
                >
                  Forgot password?
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - College Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="/assets/img/education/campus-5.webp"
            alt="College Campus"
            className="img-fluid vh-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
