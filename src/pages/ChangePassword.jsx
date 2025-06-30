import React from 'react';
import { Link } from 'react-router-dom';

export default function ChangePassword() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Column - Form */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-5 position-relative">

          {/* Back to Sign In */}
          <Link
            to="/signin"
            className="mb-4 text-decoration-none d-flex align-items-center"
            style={{
              color: 'var(--accent-color)',
              position: 'absolute',
              top: '20px',
              left: '30px',
            }}
          >
            <i className="bi bi-arrow-left me-2"></i> Back to Sign In
          </Link>

          <div className="d-flex flex-column align-items-center w-100">
            <h2
              className="mb-4 fw-bold"
              style={{ color: 'var(--accent-color)', marginTop: '60px' }}
            >
              Create New Password
            </h2>

            <p className="text-center text-muted mb-4" style={{ maxWidth: '450px' }}>
              Please enter your new password below. Make sure it is strong and secure.
            </p>

            <form className="w-100" style={{ maxWidth: '450px' }}>
              {/* New Password */}
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="Enter new password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label className="form-label fw-semibold" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Re-enter new password"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                className="btn w-100"
                type="submit"
                style={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'white',
                  fontWeight: '600',
                }}
              >
                <i className="bi bi-shield-lock me-2"></i>
                Change Password
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="/assets/img/education/campus-5.webp"
            alt="Secure Password Reset"
            className="img-fluid vh-100 w-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}
