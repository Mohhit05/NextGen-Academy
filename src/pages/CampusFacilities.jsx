import React from 'react'
import Breadcrump from '../components/Breadcrump';

export default function CampusFacilities() {
  return (
    <>
      <main className="main">

    {/* <!-- Page Title --> */} 
    <Breadcrump title={"Campus Facilities"} />
    {/* <!-- End Page Title --> */}

    {/* <!-- Campus Facilities Section --> */}
    <section id="campus-facilities" className="campus-facilities section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        {/* <!-- Hero Introduction Row --> */}
        <div className="hero-intro">
          <div className="row g-0 align-items-center">
            <div className="col-lg-8" data-aos="fade-right" data-aos-delay="200">
              <div className="content-wrapper">
                <div className="badge-highlight">Campus Excellence</div>
                <h1>Discover Our Modern Campus Facilities</h1>
                <p className="lead-text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; sed viverra mattis dui vel bibendum. Mauris vitae nunc eget lorem consectetur vehicula.</p>
                <div className="feature-highlights">
                  <div className="highlight-item">
                    <i className="bi bi-award"></i>
                    <div>
                      <span className="number">95+</span>
                      <span className="label">Modern Buildings</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-geo-alt"></i>
                    <div>
                      <span className="number">200</span>
                      <span className="label">Acre Campus</span>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <i className="bi bi-people"></i>
                    <div>
                      <span className="number">25k+</span>
                      <span className="label">Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div className="hero-visual">
                <div className="image-stack">
                  <img src="assets/img/education/campus-6.webp" alt="Campus View" className="img-fluid primary-img"/>
                  <div className="floating-card">
                    <i className="bi bi-mortarboard"></i>
                    <span>Academic Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Facilities Categories Grid --> */}
        <div className="facilities-grid" data-aos="fade-up" data-aos-delay="200">
          <div className="category-card academic" data-aos="zoom-in" data-aos-delay="100">
            <div className="card-header">
              <div className="icon-wrapper">
                <i className="bi bi-book"></i>
              </div>
              <h3>Academic Facilities</h3>
            </div>
            <div className="card-content">
              <div className="facility-image">
                <img src="assets/img/education/campus-7.webp" alt="Academic Building" className="img-fluid"/>
              </div>
              <div className="facility-list">
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Advanced Research Labs</span>
                </div>
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Smart classNamerooms</span>
                </div>
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Digital Library</span>
                </div>
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Study Lounges</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a href="#" className="explore-btn">Explore Academic <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="category-card sports" data-aos="zoom-in" data-aos-delay="200">
            <div className="card-header">
              <div className="icon-wrapper">
                <i className="bi bi-trophy"></i>
              </div>
              <h3>Sports Complex</h3>
            </div>
            <div className="card-content">
              <div className="facility-image">
                <img src="assets/img/education/campus-8.webp" alt="Sports Complex" className="img-fluid"/>
              </div>
              <div className="facility-list">
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Olympic Pool</span>
                </div>
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Gymnasium</span>
                </div>
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Tennis Courts</span>
                </div>
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Fitness Center</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a href="#" className="explore-btn">Explore Sports <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>

          <div className="category-card residence" data-aos="zoom-in" data-aos-delay="300">
            <div className="card-header">
              <div className="icon-wrapper">
                <i className="bi bi-house-heart"></i>
              </div>
              <h3>Living Spaces</h3>
            </div>
            <div className="card-content">
              <div className="facility-image">
                <img src="assets/img/education/campus-9.webp" alt="Student Housing" className="img-fluid"/>
              </div>
              <div className="facility-list">
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Modern Dormitories</span>
                </div>
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Common Areas</span>
                </div>
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Dining Halls</span>
                </div>
                <div className="facility-item">
                  <i className="bi bi-check2-circle"></i>
                  <span>Recreation Rooms</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a href="#" className="explore-btn">Explore Housing <i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>

        {/* <!-- Interactive Campus Tour --> */}
        <div className="campus-tour-section" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
              <div className="tour-content">
                <h2>Take a Virtual Campus Tour</h2>
                <p>Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                <div className="tour-features">
                  <div className="tour-feature">
                    <i className="bi bi-binoculars"></i>
                    <div>
                      <strong>360° Views</strong>
                      <p>Immersive campus experience</p>
                    </div>
                  </div>
                  <div className="tour-feature">
                    <i className="bi bi-map"></i>
                    <div>
                      <strong>Interactive Map</strong>
                      <p>Navigate with ease</p>
                    </div>
                  </div>
                  <div className="tour-feature">
                    <i className="bi bi-info-circle"></i>
                    <div>
                      <strong>Detailed Info</strong>
                      <p>Learn about each facility</p>
                    </div>
                  </div>
                </div>
                <div className="tour-actions">
                  <a href="#" className="btn-primary">Start Virtual Tour</a>
                  <a href="#" className="btn-outline">Schedule Visit</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="tour-visual">
                <div className="video-container">
                  <video autoplay="" muted="" loop="">
                    <source src="assets/img/education/video-5.mp4" type="video/mp4"/>
                  </video>
                  <div className="play-overlay">
                    <button className="play-btn">
                      <i className="bi bi-play-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Campus Highlights Carousel --> */}
        <div className="highlights-carousel" data-aos="fade-up" data-aos-delay="200">
          <div className="section-header">
            <h2>Campus Highlights</h2>
            <p>Donec rutrum congue leo eget malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
          </div>

          <div className="campus-slider swiper init-swiper">
            {/* <script type="application/json" className="swiper-config">
              {
                "loop": true,
                "speed": 800,
                "autoplay": {
                  "delay": 4000
                },
                "slidesPerView": 1,
                "spaceBetween": 30,
                "navigation": {
                  "nextEl": ".swiper-button-next",
                  "prevEl": ".swiper-button-prev"
                },
                "breakpoints": {
                  "768": {
                    "slidesPerView": 2
                  },
                  "1024": {
                    "slidesPerView": 3
                  }
                }
              }
            </script> */}
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="highlight-card">
                  <div className="card-image">
                    <img src="assets/img/education/campus-10.webp" alt="Central Library" className="img-fluid" loading="lazy"/>
                    <div className="image-overlay">
                      <span className="category-tag">Academic</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>Central Library</h4>
                    <p>Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                    <div className="card-stats">
                      <div className="stat">
                        <i className="bi bi-book"></i>
                        <span>500K+ Books</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-wifi"></i>
                        <span>High-Speed WiFi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="highlight-card">
                  <div className="card-image">
                    <img src="assets/img/education/campus-11.webp" alt="Innovation Hub" className="img-fluid" loading="lazy"/>
                    <div className="image-overlay">
                      <span className="category-tag">Research</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>Innovation Hub</h4>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <div className="card-stats">
                      <div className="stat">
                        <i className="bi bi-cpu"></i>
                        <span>AI Labs</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-gear"></i>
                        <span>Maker Space</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="highlight-card">
                  <div className="card-image">
                    <img src="assets/img/education/campus-1.webp" alt="Student Center" className="img-fluid" loading="lazy"/>
                    <div className="image-overlay">
                      <span className="category-tag">Community</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>Student Center</h4>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo lacinia eget.</p>
                    <div className="card-stats">
                      <div className="stat">
                        <i className="bi bi-cup-hot"></i>
                        <span>Food Court</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-controller"></i>
                        <span>Game Lounge</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="highlight-card">
                  <div className="card-image">
                    <img src="assets/img/education/campus-2.webp" alt="Wellness Center" className="img-fluid" loading="lazy"/>
                    <div className="image-overlay">
                      <span className="category-tag">Wellness</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4>Wellness Center</h4>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                    <div className="card-stats">
                      <div className="stat">
                        <i className="bi bi-heart-pulse"></i>
                        <span>Health Services</span>
                      </div>
                      <div className="stat">
                        <i className="bi bi-activity"></i>
                        <span>Fitness classNamees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        {/* <!-- Campus Map Integration --> */}
        <div className="map-integration" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
              <div className="map-sidebar">
                <h3>Navigate Our Campus</h3>
                <p>Explore our comprehensive campus map to find buildings, parking areas, and important facilities.</p>

                <div className="location-categories">
                  <div className="category-filter active" data-category="all">
                    <i className="bi bi-grid"></i>
                    <span>All Locations</span>
                  </div>
                  <div className="category-filter" data-category="academic">
                    <i className="bi bi-book"></i>
                    <span>Academic</span>
                  </div>
                  <div className="category-filter" data-category="dining">
                    <i className="bi bi-cup-hot"></i>
                    <span>Dining</span>
                  </div>
                  <div className="category-filter" data-category="parking">
                    <i className="bi bi-car-front"></i>
                    <span>Parking</span>
                  </div>
                  <div className="category-filter" data-category="recreation">
                    <i className="bi bi-activity"></i>
                    <span>Recreation</span>
                  </div>
                </div>

                <div className="map-actions">
                  <a href="#" className="action-link">
                    <i className="bi bi-download"></i>
                    Download Campus Map
                  </a>
                  <a href="#" className="action-link">
                    <i className="bi bi-phone"></i>
                    Campus Shuttle Info
                  </a>
                  <a href="#" className="action-link">
                    <i className="bi bi-car-front"></i>
                    Parking Information
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="300">
              <div className="map-embed">
                <div className="ratio ratio-4x3">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215482929933!2d-73.95999542349116!3d40.80709487138641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f7a01fb08965%3A0x1234567890abcdef!2sColumbia%20University!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="map-overlay-info">
                  <div className="info-card">
                    <h5>Main Campus</h5>
                    <p>116th St &amp; Broadway, New York</p>
                    <div className="quick-stats">
                      <span><i className="bi bi-geo-alt"></i> 32 Acres</span>
                      <span><i className="bi bi-building"></i> 17 Buildings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    {/* <!-- /Campus Facilities Section --> */}

  </main>
    </>
  )
}
