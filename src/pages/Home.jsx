import React from 'react'
import Testimonial from '../components/Home/Testimonial'


export default function Home() {
  return (
    <>
      <main className="main">

    {/* <!-- Hero Section --> */}
    <section id="hero" className="hero section">

      <div className="hero-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content" data-aos="fade-right" data-aos-delay="100">
              <h1>Inspiring Excellence Through Education</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus id tortor facilisis tincidunt. Donec gravida risus at sollicitudin luctus.</p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">96%</span>
                  <span className="stat-label">Employment Rate</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">12:1</span>
                  <span className="stat-label">Student-Teacher Ratio</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Programs</span>
                </div>
              </div>
              <div className="action-buttons">
                <a href="#" className="btn-primary">Start Your Journey</a>
                <a href="#" className="btn-secondary">Virtual Tour</a>
              </div>
            </div>
            <div className="col-lg-6 hero-media" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/img/education/showcase-6.webp" alt="Education" className="img-fluid main-image"/>
              <div className="image-overlay">
                <div className="badge-accredited">
                  <i className="bi bi-patch-check-fill"></i>
                  <span>Accredited Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-cards-wrapper" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-book-fill"></i>
                </div>
                <div className="feature-content">
                  <h3>Innovative Curriculum</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus id tortor facilisis.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card active">
                <div className="feature-icon">
                  <i className="bi bi-laptop-fill"></i>
                </div>
                <div className="feature-content">
                  <h3>Modern Facilities</h3>
                  <p>Donec gravida risus at sollicitudin luctus. Nullam feugiat odio vitae justo pharetra.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="feature-content">
                  <h3>Expert Faculty</h3>
                  <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="upcoming-event" data-aos="fade-up" data-aos-delay="400">
        <div className="container">
          <div className="event-content">
            <div className="event-date">
              <span className="day">15</span>
              <span className="month">NOV</span>
            </div>
            <div className="event-info">
              <h3>Spring Semester Open House</h3>
              <p>Join us to explore campus facilities, meet our faculty, and learn about scholarship opportunities.</p>
            </div>
            <div className="event-action">
              <a href="#" className="btn-event">RSVP Now</a>
              <span className="countdown">Starts in 3 weeks</span>
            </div>
          </div>
        </div>
      </div>

    </section>
    {/* <!-- /Hero Section --> */}

    {/* <!-- About Section --> */}
    <section id="about" className="about section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-content" data-aos="fade-up" data-aos-delay="200">
              <h3>Our Story</h3>
              <h2>Educating Minds, Inspiring Hearts</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae odio ac nisi tristique venenatis. Nullam feugiat ipsum vitae justo finibus, in sagittis dolor malesuada. Aenean vel fringilla est, a vulputate massa.</p>

              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>1965</h4>
                    <p>Etiam at tincidunt arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>1982</h4>
                    <p>Donec dignissim, odio ac imperdiet luctus, ante nisl accumsan justo, nec tempus augue mi in nulla.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>1998</h4>
                    <p>Suspendisse potenti. Nullam lacinia dictum auctor. Phasellus euismod sem at dui imperdiet, ac tincidunt mi placerat.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>2010</h4>
                    <p>Vestibulum ultrices magna ut faucibus sollicitudin. Sed eget venenatis enim, nec imperdiet ex.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-image" data-aos="zoom-in" data-aos-delay="300">
              <img src="assets/img/education/campus-5.webp" alt="Campus" className="img-fluid rounded"/>

              <div className="mission-vision" data-aos="fade-up" data-aos-delay="400">
                <div className="mission">
                  <h3>Our Mission</h3>
                  <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
                </div>

                <div className="vision">
                  <h3>Our Vision</h3>
                  <p>Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="core-values" data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-center mb-4">Core Values</h3>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                  <div className="value-card">
                    <div className="value-icon">
                      <i className="bi bi-book"></i>
                    </div>
                    <h4>Academic Excellence</h4>
                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                  </div>
                </div>

                <div className="col">
                  <div className="value-card">
                    <div className="value-icon">
                      <i className="bi bi-people"></i>
                    </div>
                    <h4>Community Engagement</h4>
                    <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                  </div>
                </div>

                <div className="col">
                  <div className="value-card">
                    <div className="value-icon">
                      <i className="bi bi-lightbulb"></i>
                    </div>
                    <h4>Innovation</h4>
                    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                  </div>
                </div>

                <div className="col">
                  <div className="value-card">
                    <div className="value-icon">
                      <i className="bi bi-globe"></i>
                    </div>
                    <h4>Global Perspective</h4>
                    <p>Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    {/* <!-- /About Section --> */}

    {/* <!-- Featured Programs Section --> */}
    <section id="featured-programs" className="featured-programs section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Programs</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-5">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div className="program-banner">
              <div className="banner-image">
                <img src="assets/img/education/campus-3.webp" alt="Program" className="img-fluid"/>
                <div className="banner-badge">
                  <span className="badge-text">Popular</span>
                </div>
              </div>
              <div className="banner-info">
                <div className="program-header">
                  <h3>Engineering &amp; Technology</h3>
                  <div className="program-stats">
                    <span><i className="bi bi-people-fill"></i> 450+ Students</span>
                    <span><i className="bi bi-award-fill"></i> 95% Success Rate</span>
                  </div>
                </div>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                <div className="program-details">
                  <div className="detail-item">
                    <i className="bi bi-calendar-check"></i>
                    <span>Duration: 4 Years</span>
                  </div>
                  <div className="detail-item">
                    <i className="bi bi-mortarboard-fill"></i>
                    <span>Bachelor's Degree</span>
                  </div>
                </div>
                <a href="#" className="discover-btn">Discover Program</a>
              </div>
            </div>
          </div>
          {/* <!-- End Program Banner --> */}

          <div className="col-lg-6">
            <div className="programs-grid">
              <div className="row g-3">
                <div className="col-12" data-aos="fade-left" data-aos-delay="200">
                  <div className="program-item">
                    <div className="item-icon">
                      <img src="assets/img/education/education-4.webp" alt="Program" className="img-fluid"/>
                    </div>
                    <div className="item-content">
                      <h4>Business Management</h4>
                      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                      <div className="meta-info">
                        <span>3 Years</span>
                        <span>Master's Degree</span>
                      </div>
                    </div>
                    <div className="item-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>

                <div className="col-12" data-aos="fade-left" data-aos-delay="300">
                  <div className="program-item">
                    <div className="item-icon">
                      <img src="assets/img/education/education-6.webp" alt="Program" className="img-fluid"/>
                    </div>
                    <div className="item-content">
                      <h4>Digital Marketing</h4>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                      <div className="meta-info">
                        <span>2 Years</span>
                        <span>Certificate</span>
                      </div>
                    </div>
                    <div className="item-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>

                <div className="col-12" data-aos="fade-left" data-aos-delay="400">
                  <div className="program-item">
                    <div className="item-icon">
                      <img src="assets/img/education/education-8.webp" alt="Program" className="img-fluid"/>
                    </div>
                    <div className="item-content">
                      <h4>Health Sciences</h4>
                      <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.</p>
                      <div className="meta-info">
                        <span>5 Years</span>
                        <span>Bachelor's Degree</span>
                      </div>
                    </div>
                    <div className="item-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>

                <div className="col-12" data-aos="fade-left" data-aos-delay="500">
                  <div className="program-item">
                    <div className="item-icon">
                      <img src="assets/img/education/education-10.webp" alt="Program" className="img-fluid"/>
                    </div>
                    <div className="item-content">
                      <h4>Creative Arts</h4>
                      <p>Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.</p>
                      <div className="meta-info">
                        <span>3 Years</span>
                        <span>Bachelor's Degree</span>
                      </div>
                    </div>
                    <div className="item-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Programs Grid --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Featured Programs Section --> */}

    {/* <!-- Students Life Block Section --> */}
    <section id="students-life-block" className="students-life-block section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Students Life</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
            <div className="hero-image-wrapper">
              <img src="assets/img/education/students-7.webp" alt="Student Life" className="img-fluid main-image"/>
              <div className="floating-card" data-aos="zoom-in" data-aos-delay="400">
                <div className="card-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="card-content">
                  <span className="card-number">2500+</span>
                  <span className="card-label">Active Students</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div className="content-wrapper">
              <div className="section-badge" data-aos="fade-up" data-aos-delay="350">
                <span>Student Life</span>
              </div>
              <h2 data-aos="fade-up" data-aos-delay="400">Vivamus consequat lorem at nisl laoreet commodo a ac lectus</h2>
              <p className="lead-text" data-aos="fade-up" data-aos-delay="450">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.</p>

              <div className="info-grid" data-aos="fade-up" data-aos-delay="500">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-calendar-event"></i>
                  </div>
                  <div className="info-text">
                    <strong>Year-Round Events</strong>
                    <span>Duis aute irure dolor in reprehenderit voluptate</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <div className="info-text">
                    <strong>Achievement Programs</strong>
                    <span>Excepteur sint occaecat cupidatat non proident</span>
                  </div>
                </div>
              </div>

              <div className="cta-section" data-aos="fade-up" data-aos-delay="600">
                <a href="student-activities.html" className="btn-primary">Discover More</a>
                <a href="virtual-tour.html" className="btn-link">
                  <i className="bi bi-play-circle"></i>
                  <span>Take Virtual Tour</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="activities-showcase">
          <div className="row g-4">
            <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
              <div className="featured-activity">
                <div className="activity-media">
                  <img src="assets/img/education/activities-2.webp" alt="Featured Activity" className="img-fluid"/>
                  <div className="activity-overlay">
                    <div className="overlay-content">
                      <h4>Student Organizations</h4>
                      <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                      <a href="#" className="overlay-btn">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div className="activities-list">
                <div className="activity-item" data-aos="slide-up" data-aos-delay="350">
                  <div className="activity-thumb">
                    <img src="assets/img/education/activities-6.webp" alt="Research Projects" className="img-fluid"/>
                  </div>
                  <div className="activity-info">
                    <h6>Research Projects</h6>
                    <p>Sed ut perspiciatis unde omnis natus error</p>
                  </div>
                </div>

                <div className="activity-item" data-aos="slide-up" data-aos-delay="400">
                  <div className="activity-thumb">
                    <img src="assets/img/education/activities-1.webp" alt="Community Service" className="img-fluid"/>
                  </div>
                  <div className="activity-info">
                    <h6>Community Service</h6>
                    <p>At vero eos et accusamus et iusto odio</p>
                  </div>
                </div>

                <div className="activity-item" data-aos="slide-up" data-aos-delay="450">
                  <div className="activity-thumb">
                    <img src="assets/img/education/activities-4.webp" alt="Innovation Labs" className="img-fluid"/>
                  </div>
                  <div className="activity-info">
                    <h6>Innovation Labs</h6>
                    <p>Temporibus autem quibusdam officiis debitis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    {/* <!-- /Students Life Block Section --> */}

    {/* <!-- Testimonials Section --> */}
     <Testimonial />
    {/* <!-- /Testimonials Section --> */}

    {/* <!-- Stats Section --> */}
    <section id="stats" className="stats section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="intro-content" data-aos="fade-up" data-aos-delay="200">
              <h2 className="section-heading">Transforming Lives Through Quality Education</h2>
              <p className="section-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="metric-card" data-aos="flip-left" data-aos-delay="300">
              <div className="metric-header">
                <div className="metric-icon-wrapper">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <div className="metric-value">
                  <span data-purecounter-start="0" data-purecounter-end="87" data-purecounter-duration="1" className="purecounter"></span>%
                </div>
              </div>
              <div className="metric-info">
                <h4>Success Rate</h4>
                <p>Alumni employment within 6 months</p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="metric-card" data-aos="flip-left" data-aos-delay="400">
              <div className="metric-header">
                <div className="metric-icon-wrapper">
                  <i className="bi bi-building"></i>
                </div>
                <div className="metric-value">
                  <span data-purecounter-start="0" data-purecounter-end="8" data-purecounter-duration="1" className="purecounter"></span>
                </div>
              </div>
              <div className="metric-info">
                <h4>Campus Locations</h4>
                <p>Across the country serving students</p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="metric-card" data-aos="flip-left" data-aos-delay="500">
              <div className="metric-header">
                <div className="metric-icon-wrapper">
                  <i className="bi bi-trophy-fill"></i>
                </div>
                <div className="metric-value">
                  <span data-purecounter-start="0" data-purecounter-end="250" data-purecounter-duration="1" className="purecounter"></span>+
                </div>
              </div>
              <div className="metric-info">
                <h4>Awards Received</h4>
                <p>Recognition for educational excellence</p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="metric-card" data-aos="flip-left" data-aos-delay="600">
              <div className="metric-header">
                <div className="metric-icon-wrapper">
                  <i className="bi bi-globe"></i>
                </div>
                <div className="metric-value">
                  <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>+
                </div>
              </div>
              <div className="metric-info">
                <h4>Countries Represented</h4>
                <p>Diverse international student body</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="highlights-section" data-aos="fade-up" data-aos-delay="700">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="highlights-content">
                    <h3 className="highlights-title">Building Tomorrow's Leaders Today</h3>
                    <p className="highlights-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                    <div className="highlights-features">
                      <div className="feature-item" data-aos="fade-right" data-aos-delay="800">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Innovative curriculum design</span>
                      </div>
                      <div className="feature-item" data-aos="fade-right" data-aos-delay="900">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>World-className faculty expertise</span>
                      </div>
                      <div className="feature-item" data-aos="fade-right" data-aos-delay="1000">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>Comprehensive student support</span>
                      </div>
                    </div>
                    <div className="highlights-cta">
                      <a href="#" className="cta-btn primary">Explore Programs</a>
                      <a href="#" className="cta-btn secondary">Download Brochure</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="highlights-gallery">
                    <div className="gallery-grid">
                      <div className="gallery-item large" data-aos="zoom-in" data-aos-delay="800">
                        <img src="assets/img/education/campus-3.webp" alt="Campus Life" className="img-fluid" loading="lazy"/>
                        <div className="gallery-overlay">
                          <h5>Modern Campus</h5>
                        </div>
                      </div>
                      <div className="gallery-item small" data-aos="zoom-in" data-aos-delay="900">
                        <img src="assets/img/education/students-5.webp" alt="Students" className="img-fluid" loading="lazy"/>
                        <div className="gallery-overlay">
                          <h6>Student Life</h6>
                        </div>
                      </div>
                      <div className="gallery-item small" data-aos="zoom-in" data-aos-delay="1000">
                        <img src="assets/img/education/teacher-7.webp" alt="Faculty" className="img-fluid" loading="lazy"/>
                        <div className="gallery-overlay">
                          <h6>Expert Faculty</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    {/* <!-- /Stats Section --> */}

    {/* <!-- Recent News Section --> */}
    <section id="recent-news" className="recent-news section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent News</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="100">
            <article className="post-item d-flex">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-1.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>

              <div className="post-content flex-grow-1">
                <a href="#" className="category">Design</a>

                <h2 className="post-title">
                  <a href="#">Sed ut perspiciatis unde omnis</a>
                </h2>

                <p className="post-description">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                </p>

                <div className="post-meta">
                  <div className="post-author">
                    <img src="assets/img/person/person-f-12.webp" alt="" className="img-fluid"/>
                    <span className="author-name">Lina Chen</span>
                  </div>
                  <span className="post-date">Mar 15, 2025</span>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- End post item --> */}

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="200">
            <article className="post-item d-flex">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-2.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>

              <div className="post-content flex-grow-1">
                <a href="#" className="category">Product</a>

                <h2 className="post-title">
                  <a href="#">At vero eos et accusamus</a>
                </h2>

                <p className="post-description">
                  Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi.
                </p>

                <div className="post-meta">
                  <div className="post-author">
                    <img src="assets/img/person/person-f-13.webp" alt="" className="img-fluid"/>
                    <span className="author-name">Sofia Rodriguez</span>
                  </div>
                  <span className="post-date">Apr 22, 2025</span>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- End post item --> */}

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
            <article className="post-item d-flex">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-3.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>

              <div className="post-content flex-grow-1">
                <a href="#" className="category">Software Engineering</a>

                <h2 className="post-title">
                  <a href="#">Temporibus autem quibusdam</a>
                </h2>

                <p className="post-description">
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.
                </p>

                <div className="post-meta">
                  <div className="post-author">
                    <img src="assets/img/person/person-m-10.webp" alt="" className="img-fluid"/>
                    <span className="author-name">Lucas Thompson</span>
                  </div>
                  <span className="post-date">May 8, 2025</span>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- End post item --> */}

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="400">
            <article className="post-item d-flex">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-4.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>

              <div className="post-content flex-grow-1">
                <a href="#" className="category">Creative</a>

                <h2 className="post-title">
                  <a href="#">Nam libero tempore soluta</a>
                </h2>

                <p className="post-description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className="post-meta">
                  <div className="post-author">
                    <img src="assets/img/person/person-f-14.webp" alt="" className="img-fluid"/>
                    <span className="author-name">Emma Patel</span>
                  </div>
                  <span className="post-date">Jun 30, 2025</span>
                </div>
              </div>
            </article>
          </div>
          {/* <!-- End post item --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Recent News Section --> */}

    {/* <!-- Events Section --> */}
    <section id="events" className="events section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Events</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-4">

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="event-item">
              <div className="event-image">
                <img src="assets/img/education/events-3.webp" alt="Workshop" className="img-fluid"/>
                <div className="event-date-overlay">
                  <span className="date">MAR<br/>18</span>
                </div>
              </div>
              <div className="event-details">
                <div className="event-category">
                  <span className="badge academic">Academic</span>
                  <span className="event-time">2:00 PM</span>
                </div>
                <h3>Advanced Mathematics Workshop</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="event-info">
                  <div className="info-row">
                    <i className="bi bi-geo-alt"></i>
                    <span>Room 205, Science Building</span>
                  </div>
                  <div className="info-row">
                    <i className="bi bi-people"></i>
                    <span>25 Participants</span>
                  </div>
                </div>
                <div className="event-footer">
                  <a href="#" className="register-btn">Register Now</a>
                  <div className="event-share">
                    <i className="bi bi-share"></i>
                    <i className="bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="event-item">
              <div className="event-image">
                <img src="assets/img/education/events-5.webp" alt="Tournament" className="img-fluid"/>
                <div className="event-date-overlay">
                  <span className="date">APR<br/>05</span>
                </div>
              </div>
              <div className="event-details">
                <div className="event-category">
                  <span className="badge sports">Sports</span>
                  <span className="event-time">9:00 AM</span>
                </div>
                <h3>Inter-School Basketball Championship</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div className="event-info">
                  <div className="info-row">
                    <i className="bi bi-geo-alt"></i>
                    <span>Sports Complex Gym</span>
                  </div>
                  <div className="info-row">
                    <i className="bi bi-people"></i>
                    <span>8 Teams</span>
                  </div>
                </div>
                <div className="event-footer">
                  <a href="#" className="register-btn">Register Now</a>
                  <div className="event-share">
                    <i className="bi bi-share"></i>
                    <i className="bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="event-item">
              <div className="event-image">
                <img src="assets/img/education/events-7.webp" alt="Art Exhibition" className="img-fluid"/>
                <div className="event-date-overlay">
                  <span className="date">APR<br/>12</span>
                </div>
              </div>
              <div className="event-details">
                <div className="event-category">
                  <span className="badge arts">Arts</span>
                  <span className="event-time">6:00 PM</span>
                </div>
                <h3>Student Art Exhibition Opening</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="event-info">
                  <div className="info-row">
                    <i className="bi bi-geo-alt"></i>
                    <span>Art Gallery, First Floor</span>
                  </div>
                  <div className="info-row">
                    <i className="bi bi-people"></i>
                    <span>Open to All</span>
                  </div>
                </div>
                <div className="event-footer">
                  <a href="#" className="register-btn">Register Now</a>
                  <div className="event-share">
                    <i className="bi bi-share"></i>
                    <i className="bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="event-item">
              <div className="event-image">
                <img src="assets/img/education/events-2.webp" alt="Science Fair" className="img-fluid"/>
                <div className="event-date-overlay">
                  <span className="date">MAY<br/>03</span>
                </div>
              </div>
              <div className="event-details">
                <div className="event-category">
                  <span className="badge academic">Academic</span>
                  <span className="event-time">10:00 AM</span>
                </div>
                <h3>Annual Science Fair Competition</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="event-info">
                  <div className="info-row">
                    <i className="bi bi-geo-alt"></i>
                    <span>Main Auditorium Hall</span>
                  </div>
                  <div className="info-row">
                    <i className="bi bi-people"></i>
                    <span>45 Projects</span>
                  </div>
                </div>
                <div className="event-footer">
                  <a href="#" className="register-btn">Register Now</a>
                  <div className="event-share">
                    <i className="bi bi-share"></i>
                    <i className="bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="event-item">
              <div className="event-image">
                <img src="assets/img/education/events-8.webp" alt="Community Event" className="img-fluid"/>
                <div className="event-date-overlay">
                  <span className="date">MAY<br/>15</span>
                </div>
              </div>
              <div className="event-details">
                <div className="event-category">
                  <span className="badge community">Community</span>
                  <span className="event-time">3:00 PM</span>
                </div>
                <h3>Family Fun Day Celebration</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="event-info">
                  <div className="info-row">
                    <i className="bi bi-geo-alt"></i>
                    <span>School Playground Area</span>
                  </div>
                  <div className="info-row">
                    <i className="bi bi-people"></i>
                    <span>All Families</span>
                  </div>
                </div>
                <div className="event-footer">
                  <a href="#" className="register-btn">Register Now</a>
                  <div className="event-share">
                    <i className="bi bi-share"></i>
                    <i className="bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="event-item">
              <div className="event-image">
                <img src="assets/img/education/events-6.webp" alt="Music Concert" className="img-fluid"/>
                <div className="event-date-overlay">
                  <span className="date">JUN<br/>02</span>
                </div>
              </div>
              <div className="event-details">
                <div className="event-category">
                  <span className="badge arts">Arts</span>
                  <span className="event-time">7:30 PM</span>
                </div>
                <h3>Summer Music Concert Finale</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div className="event-info">
                  <div className="info-row">
                    <i className="bi bi-geo-alt"></i>
                    <span>Music Hall Theater</span>
                  </div>
                  <div className="info-row">
                    <i className="bi bi-people"></i>
                    <span>300 Seats</span>
                  </div>
                </div>
                <div className="event-footer">
                  <a href="#" className="register-btn">Register Now</a>
                  <div className="event-share">
                    <i className="bi bi-share"></i>
                    <i className="bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="events-navigation" data-aos="fade-up" data-aos-delay="500">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="filter-tabs">
                <button className="filter-tab active" data-filter="all">All Events</button>
                <button className="filter-tab" data-filter="academic">Academic</button>
                <button className="filter-tab" data-filter="sports">Sports</button>
                <button className="filter-tab" data-filter="arts">Arts</button>
                <button className="filter-tab" data-filter="community">Community</button>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <a href="#" className="view-calendar-btn">
                <i className="bi bi-calendar3"></i>
                View Calendar
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
    {/* <!-- /Events Section --> */}

  </main>
    </>
  )
}
