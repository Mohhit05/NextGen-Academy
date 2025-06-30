import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function TermsOfService() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"Terms Of Service"} />

        {/* Terms Of Service Section */}
        <section id="terms-of-service" className="terms-of-service section">
          <div className="container" data-aos="fade-up">
            
            {/* Hero Section */}
            <div className="terms-hero" data-aos="fade-up">
              <span className="badge">Last Updated: February 27, 2025</span>
              <h2>Terms &amp; Conditions</h2>
              <p>These terms and conditions outline your rights and responsibilities when using our services</p>
              <div className="terms-highlights">
                <div className="highlight-item">
                  <i className="bi bi-shield-check" />
                  <span>Secure Service</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-lock" />
                  <span>Data Protection</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-hand-thumbs-up" />
                  <span>Fair Terms</span>
                </div>
              </div>
            </div>

            {/* Terms Grid */}
            <div className="terms-grid" data-aos="fade-up">

              {/* Agreement Card */}
              <div className="terms-card" data-aos="fade-up" data-aos-delay="100">
                <div className="card-header">
                  <div className="header-icon">
                    <i className="bi bi-file-text" />
                  </div>
                  <h3>Agreement Terms</h3>
                </div>
                <div className="card-content">
                  <p>By accessing our service, you confirm that you are agreeing to be bound by these terms of service. These terms apply to all users and visitors.</p>
                  <ul className="check-list">
                    <li>Acceptance of terms</li>
                    <li>Compliance with laws</li>
                    <li>Service availability</li>
                    <li>User obligations</li>
                  </ul>
                </div>
              </div>

              {/* User Rights Card */}
              <div className="terms-card" data-aos="fade-up" data-aos-delay="200">
                <div className="card-header">
                  <div className="header-icon">
                    <i className="bi bi-person-check" />
                  </div>
                  <h3>User Rights</h3>
                </div>
                <div className="card-content">
                  <p>As a user, you have specific rights when using our service, including data privacy and access to features.</p>
                  <ul className="check-list">
                    <li>Account control</li>
                    <li>Data privacy</li>
                    <li>Service access</li>
                    <li>Content ownership</li>
                  </ul>
                </div>
              </div>

              {/* Restrictions Card */}
              <div className="terms-card" data-aos="fade-up" data-aos-delay="300">
                <div className="card-header">
                  <div className="header-icon">
                    <i className="bi bi-shield-x" />
                  </div>
                  <h3>Restrictions</h3>
                </div>
                <div className="card-content">
                  <div className="restrictions-list">
                    <div className="restriction-item">
                      <i className="bi bi-x-circle" />
                      <span>No unauthorized data collection</span>
                    </div>
                    <div className="restriction-item">
                      <i className="bi bi-x-circle" />
                      <span>No service misuse</span>
                    </div>
                    <div className="restriction-item">
                      <i className="bi bi-x-circle" />
                      <span>No intellectual property violation</span>
                    </div>
                    <div className="restriction-item">
                      <i className="bi bi-x-circle" />
                      <span>No harmful activities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="terms-points" data-aos="fade-up">
              <h3>Key Points to Note</h3>
              <div className="points-grid">
                <div className="point-item">
                  <div className="point-icon">
                    <i className="bi bi-clock-history" />
                  </div>
                  <div className="point-content">
                    <h4>Service Availability</h4>
                    <p>We strive to provide uninterrupted service but cannot guarantee 100% availability.</p>
                  </div>
                </div>

                <div className="point-item">
                  <div className="point-icon">
                    <i className="bi bi-shield-check" />
                  </div>
                  <div className="point-content">
                    <h4>Privacy Protection</h4>
                    <p>Your data is protected according to our privacy policy and applicable laws.</p>
                  </div>
                </div>

                <div className="point-item">
                  <div className="point-icon">
                    <i className="bi bi-pencil-square" />
                  </div>
                  <div className="point-content">
                    <h4>Content Rights</h4>
                    <p>You retain rights to your content while granting us license to use it.</p>
                  </div>
                </div>
              </div>

              {/* Important Notices */}
              <div className="terms-notices" data-aos="fade-up">
                <div className="notice-wrapper">
                  <div className="notice-items">
                    <div className="notice-item">
                      <div className="notice-marker">
                        <i className="bi bi-exclamation-circle" />
                      </div>
                      <div className="notice-content">
                        <h4>Service Modifications</h4>
                        <p>We reserve the right to modify or discontinue any part of our service with or without notice.</p>
                      </div>
                    </div>

                    <div className="notice-item">
                      <div className="notice-marker">
                        <i className="bi bi-exclamation-circle" />
                      </div>
                      <div className="notice-content">
                        <h4>Account Termination</h4>
                        <p>We may terminate accounts that violate these terms or for any other reason at our discretion.</p>
                      </div>
                    </div>

                    <div className="notice-item">
                      <div className="notice-marker">
                        <i className="bi bi-exclamation-circle" />
                      </div>
                      <div className="notice-content">
                        <h4>Terms Updates</h4>
                        <p>These terms may be updated at any time. Continued use of the service implies acceptance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Box */}
              <div className="terms-contact" data-aos="fade-up">
                <div className="contact-wrapper">
                  <div className="contact-content">
                    <div className="contact-text">
                      <h4>Need Clarification?</h4>
                      <p>If you have questions about these terms, our support team is here to help.</p>
                    </div>
                    <div className="contact-actions">
                      <a href="#" className="btn-primary">Contact Support</a>
                      <a href="#" className="btn-outline">Download Terms</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
