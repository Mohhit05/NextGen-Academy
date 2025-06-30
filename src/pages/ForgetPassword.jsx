import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Column - Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-5 position-relative">

          {/* Back to Sign In */}
          <Link to="/signin" className="mb-4 text-decoration-none d-flex align-items-center" style={{ color: 'var(--accent-color)', position: 'absolute', top: '20px', left: '30px' }}>
            <i className="bi bi-arrow-left me-2"></i> Back to Sign In
          </Link>

          <div className="d-flex flex-column align-items-center w-100">
            <h2 className="mb-4 fw-bold" style={{ color: 'var(--accent-color)', marginTop: '60px' }}>
              Forgot Password
            </h2>

            <p className="text-center text-muted mb-4" style={{ maxWidth: '450px' }}>
              Enter your registered email address and we’ll send you a link to reset your password.
            </p>

            <form className="w-100" style={{ maxWidth: '450px' }}>
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

              <button
                className="btn w-100"
                type="submit"
                style={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'white',
                  fontWeight: '600',
                }}
              >
                <i className="bi bi-envelope me-2"></i>
                Send Reset Link
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - College Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="/assets/img/education/campus-5.webp"
            alt="College Campus"
            className="img-fluid vh-100 w-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}
