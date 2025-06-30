import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function Admissions() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"Admissions"} />

        {/* Admissions Section */}
        <section id="admissions" className="admissions section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">
              {/* How to Apply */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="application-steps">
                  <h3 className="section-subtitle">How to Apply</h3>
                  <div className="steps-wrapper">
                    {[
                      { step: '01', title: 'Submit Application', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
                      { step: '02', title: 'Send Documents', desc: 'Aenean quis feugiat ligula. Duis hendrerit felis id aliquet cursus...' },
                      { step: '03', title: 'Interview Process', desc: 'Pellentesque diam tellus, scelerisque quis sodales vel...' },
                      { step: '04', title: 'Decision Letter', desc: 'Curabitur vulputate tellus sapien, id ultrices libero egestas...' },
                    ].map((item, i) => (
                      <div className="step-item" key={i}>
                        <div className="step-number">{item.step}</div>
                        <div className="step-content">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Admission Requirements */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="requirements-card">
                  <h3 className="section-subtitle">Admission Requirements</h3>
                  <ul className="requirements-list">
                    {[
                      'Completed Application Form',
                      'Official High School Transcripts',
                      'SAT or ACT Scores (Optional for 2024-2025)',
                      'Two Letters of Recommendation',
                      'Personal Essay (500-650 words)',
                      'Application Fee ($65 non-refundable)',
                      'Interview (for selected programs only)',
                    ].map((req, i) => (
                      <li key={i}>
                        <i className="bi bi-check-circle"></i>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="special-note">
                    <i className="bi bi-info-circle"></i>
                    <p>
                      International students require additional documentation including TOEFL/IELTS scores and visa information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tuition & Contact */}
            <div className="row mt-5 gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="tuition-card">
                  <h3 className="section-subtitle">Tuition & Fees</h3>
                  <div className="tuition-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Program</th>
                          <th>Tuition (per year)</th>
                          <th>Fees</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>Undergraduate</td><td>$32,500</td><td>$2,800</td></tr>
                        <tr><td>Graduate</td><td>$38,700</td><td>$3,200</td></tr>
                        <tr><td>International</td><td>$42,300</td><td>$4,500</td></tr>
                        <tr><td>Online Programs</td><td>$26,400</td><td>$1,800</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="financial-aid">
                    <h4>Financial Aid Available</h4>
                    <p>Over 75% of our students receive some form of financial assistance. Merit scholarships range from $5,000 to full tuition.</p>
                    <a href="#" className="btn btn-aid">Explore Financial Aid Options</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-form-card">
                  <h3 className="section-subtitle">Request Information</h3>
                  <form action="forms/contact.php" className="php-email-form">
                    <div className="row g-3">
                      <div className="col-12">
                        <input type="text" name="name" className="form-control" placeholder="Name*" required />
                      </div>
                      <div className="col-md-6">
                        <input type="email" name="email" className="form-control" placeholder="Email Address*" required />
                      </div>
                      <div className="col-md-6">
                        <input type="tel" name="phone" className="form-control" placeholder="Phone Number" />
                      </div>
                      <div className="col-12">
                        <select name="subject" className="form-select" required>
                          <option value="" disabled selected>Program of Interest*</option>
                          <option>Undergraduate</option>
                          <option>Graduate</option>
                          <option>Doctoral</option>
                          <option>Certificate</option>
                          <option>Non-Degree</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea name="message" className="form-control" rows="7" placeholder="Questions or Comments"></textarea>
                      </div>
                      <div className="col-12">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                        <button type="submit" className="btn btn-request">Request Information</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Deadlines */}
            <div className="row mt-5">
              <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                <div className="deadlines-card">
                  <h3 className="section-subtitle">Important Deadlines</h3>
                  <div className="deadlines-grid">
                    {[
                      ['November 1', 'Early Decision', 'For students committed to attending if accepted'],
                      ['January 15', 'Regular Decision', 'Main application deadline for Fall admission'],
                      ['March 1', 'Financial Aid', 'Priority deadline for scholarship consideration'],
                      ['May 1', 'Enrollment Deposit', 'Deadline to confirm attendance and secure your spot'],
                    ].map(([date, title, desc], i) => (
                      <div className="deadline-item" data-aos="zoom-in" data-aos-delay={200 + i * 100} key={i}>
                        <div className="deadline-date">{date}</div>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Visit */}
            <div className="row mt-5 campus-visit">
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                <div className="visit-image">
                  <img src="assets/img/education/campus-5.webp" className="img-fluid" alt="Campus Visit" loading="lazy" />
                  <div className="image-caption">Experience our beautiful campus in person</div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                <div className="visit-content">
                  <h3>Schedule a Campus Visit</h3>
                  <p>Join us for a personalized campus tour and experience our vibrant community firsthand...</p>
                  <ul className="visit-options">
                    <li><i className="bi bi-calendar-check"></i> Daily campus tours (Mon-Fri, 10am & 2pm)</li>
                    <li><i className="bi bi-people"></i> Information sessions with admissions staff</li>
                    <li><i className="bi bi-building"></i> Residence hall viewings</li>
                    <li><i className="bi bi-mortarboard"></i> Faculty meetings (by appointment)</li>
                  </ul>
                  <a href="#" className="btn btn-schedule">Schedule Your Visit</a>
                  <div className="virtual-option">
                    <span>Can't visit in person?</span>
                    <a href="#" className="virtual-link">Take a Virtual Tour <i className="bi bi-arrow-right"></i></a>
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
