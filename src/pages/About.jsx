import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function About() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"About"} />

        {/* History Section */}
        <section id="history" className="history section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="about-content" data-aos="fade-up" data-aos-delay="200">
                  <h3>Our Story</h3>
                  <h2>Educating Minds, Inspiring Hearts</h2>
                  <p>Lorem ipsum dolor sit amet...</p>

                  <div className="timeline">
                    {[1965, 1982, 1998, 2010].map((year, i) => (
                      <div className="timeline-item" key={i}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <h4>{year}</h4>
                          <p>Event description for {year}...</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-image" data-aos="zoom-in" data-aos-delay="300">
                  <img src="assets/img/education/campus-5.webp" alt="Campus" className="img-fluid rounded" />
                  <div className="mission-vision" data-aos="fade-up" data-aos-delay="400">
                    <div className="mission">
                      <h3>Our Mission</h3>
                      <p>Vestibulum ante ipsum primis in faucibus...</p>
                    </div>
                    <div className="vision">
                      <h3>Our Vision</h3>
                      <p>Nulla porttitor accumsan tincidunt...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="row mt-5">
              <div className="col-lg-12">
                <div className="core-values" data-aos="fade-up" data-aos-delay="500">
                  <h3 className="text-center mb-4">Core Values</h3>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {[
                      { icon: "bi-book", title: "Academic Excellence", text: "Praesent sapien massa..." },
                      { icon: "bi-people", title: "Community Engagement", text: "Vivamus magna justo..." },
                      { icon: "bi-lightbulb", title: "Innovation", text: "Curabitur arcu erat..." },
                      { icon: "bi-globe", title: "Global Perspective", text: "Donec sollicitudin..." }
                    ].map((val, idx) => (
                      <div className="col" key={idx}>
                        <div className="value-card">
                          <div className="value-icon">
                            <i className={`bi ${val.icon}`}></i>
                          </div>
                          <h4>{val.title}</h4>
                          <p>{val.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="leadership section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="intro-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
                  <div className="intro-image">
                    <img src="assets/img/education/teacher-5.webp" alt="School Leadership" className="img-fluid rounded-lg" />
                    <div className="experience-badge">
                      <span className="years">35+</span>
                      <span className="text">Years of Educational Excellence</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-1" data-aos="fade-up" data-aos-delay="300">
                  <div className="intro-content">
                    <span className="subtitle">Administration &amp; Leadership</span>
                    <h2 className="title">Inspiring Leaders Shaping Tomorrow's Generation</h2>
                    <p className="description">Lorem ipsum dolor sit amet...</p>
                    <div className="highlights">
                      {[
                        { icon: "bi-mortarboard-fill", title: "Expert Faculty" },
                        { icon: "bi-graph-up-arrow", title: "Academic Excellence" }
                      ].map((highlight, i) => (
                        <div className="highlight-item" key={i}>
                          <div className="icon-box">
                            <i className={`bi ${highlight.icon}`}></i>
                          </div>
                          <div className="content">
                            <h4>{highlight.title}</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Cards */}
            <div className="leadership-section" data-aos="fade-up">
              <div className="section-header text-center">
                <span className="subtitle">Our Team</span>
                <h2 className="title">Meet Our Distinguished Leadership</h2>
                <p className="description">Lorem ipsum dolor sit amet...</p>
              </div>

              <div className="row g-4">
                {[
                  { name: "Dr. Robert Williams", role: "Principal", img: "person-m-4" },
                  { name: "Dr. Jennifer Parker", role: "Vice Principal", img: "person-f-6" },
                  { name: "Prof. Michael Stevens", role: "Academic Dean", img: "person-m-9" },
                  { name: "Dr. Angela Martinez", role: "Student Affairs", img: "person-f-5" },
                  { name: "Sophia Rodriguez", role: "Admissions Director", img: "person-f-7" },
                  { name: "James Thompson", role: "Technology Director", img: "person-m-8" },
                  { name: "Daniel Wilson", role: "Athletics Director", img: "person-m-3" },
                  { name: "Dr. Emily Chen", role: "Counseling Head", img: "person-f-4" },
                ].map((member, i) => (
                  <div className="col-xl-3 col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={`${100 * ((i % 4) + 1)}`}>
                    <div className="team-card">
                      <div className="card-inner">
                        <div className="card-front">
                          <div className="member-image">
                            <img src={`assets/img/person/${member.img}.webp`} alt={member.role} className="img-fluid" />
                          </div>
                          <div className="member-info">
                            <h4>{member.name}</h4>
                            <p>{member.role}</p>
                          </div>
                        </div>
                        <div className="card-back">
                          <h4>{member.name}</h4>
                          <p className="position">{member.role}</p>
                          <p className="bio">Lorem ipsum dolor sit amet...</p>
                          <div className="social-links">
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-envelope"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
