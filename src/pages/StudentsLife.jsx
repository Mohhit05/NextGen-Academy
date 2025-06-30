import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function StudentsLife() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"Students Life"} />

        {/* Students Life Section */}
        <section id="students-life" className="students-life section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row">
              <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="200">
                <img src="assets/img/education/campus-1.webp" className="img-fluid rounded" alt="Campus Life" />
              </div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                <div className="student-life-intro">
                  <h3>Vibrant Campus Experience</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius felis nec sem viverra, nec tincidunt felis mollis.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-outline-primary">Explore Campus</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Organizations & Clubs */}
            <div className="student-organizations mt-5 pt-4" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-center mb-4">Student Organizations &amp; Clubs</h3>
              <div className="row g-4">
                {[
                  { icon: "music-note-beamed", title: "Music & Performance", text: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.", badge: "15+ Groups" },
                  { icon: "globe-americas", title: "Cultural Organizations", text: "Nullam quis risus eget urna mollis ornare vel eu leo.", badge: "20+ Groups" },
                  { icon: "book", title: "Academic Clubs", text: "Aenean lacinia bibendum nulla sed consectetur.", badge: "25+ Clubs" }
                ].map((club, i) => (
                  <div className="col-md-4" data-aos="zoom-in" data-aos-delay={200 + i * 100} key={i}>
                    <div className="organization-card">
                      <div className="icon-box">
                        <i className={`bi bi-${club.icon}`}></i>
                      </div>
                      <h5>{club.title}</h5>
                      <p>{club.text}</p>
                      <span className="badge">{club.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Athletics & Recreation */}
            <div className="athletics-programs mt-5 pt-3" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-center mb-4">Athletics &amp; Recreation</h3>

              <div className="athletics-slider swiper init-swiper" data-aos="fade-up" data-aos-delay="300">
                {/* Swiper config JSON inside script won't run in JSX. If you're using Swiper in React, use its React wrapper */}
                <div className="swiper-wrapper">
                  {[
                    { img: "activities-2.webp", title: "Swimming", desc: "Lorem ipsum dolor sit amet." },
                    { img: "activities-4.webp", title: "Basketball", desc: "Nullam id dolor id nibh ultricies." },
                    { img: "activities-6.webp", title: "Soccer", desc: "Aenean eu leo quam. Pellentesque ornare." },
                    { img: "activities-8.webp", title: "Tennis", desc: "Donec sed odio dui. Nullam quis risus." }
                  ].map((sport, i) => (
                    <div className="swiper-slide" key={i}>
                      <div className="athletics-card">
                        <img src={`assets/img/education/${sport.img}`} className="img-fluid" loading="lazy" alt={sport.title} />
                        <div className="athletics-content">
                          <h5>{sport.title}</h5>
                          <p>{sport.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            {/* Campus Facilities */}
            <div className="campus-facilities mt-5 pt-3" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-center mb-4">Campus Facilities</h3>

              <div className="row g-4">
                {[
                  { img: "campus-4.webp", title: "Student Housing", desc: "Comfortable living spaces designed for academic success." },
                  { img: "campus-5.webp", title: "Dining Facilities", desc: "Multiple dining options with diverse meal plans." },
                  { img: "campus-6.webp", title: "Modern Library", desc: "Extensive collection of resources with study spaces." },
                  { img: "campus-7.webp", title: "Recreation Center", desc: "Fitness equipment and spaces for group activities." }
                ].map((facility, i) => (
                  <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={100 + i * 100} key={i}>
                    <div className="facility-card">
                      <img src={`assets/img/education/${facility.img}`} className="img-fluid" alt={facility.title} />
                      <div className="facility-info">
                        <h5>{facility.title}</h5>
                        <p>{facility.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Support Services */}
            <div className="support-services mt-5 pt-3" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-center mb-4">Student Support Services</h3>

              <div className="row g-4">
                {[
                  { icon: "heart-pulse", title: "Health & Wellness", link: "#", delay: 100 },
                  { icon: "briefcase", title: "Career Services", link: "#", delay: 200 },
                  { icon: "universal-access", title: "Accessibility Services", link: "#", delay: 300 }
                ].map((service, i) => (
                  <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={service.delay} key={i}>
                    <div className="service-card">
                      <div className="icon-box">
                        <i className={`bi bi-${service.icon}`}></i>
                      </div>
                      <h5>{service.title}</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href={service.link} className="service-link">
                        Learn More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Gallery */}
            <div className="student-gallery mt-5 pt-3" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-center mb-4">Student Life Gallery</h3>

              <div className="row g-3">
                {[1, 2, 3, 4, 5, 6].map((n, i) => (
                  <div className="col-md-4" data-aos="zoom-in" data-aos-delay={100 * (i + 1)} key={n}>
                    <a href={`assets/img/education/students-${n}.webp`} className="gallery-item glightbox">
                      <img src={`assets/img/education/students-${n}.webp`} className="img-fluid" loading="lazy" alt="Student Life" />
                      <div className="gallery-overlay">
                        <i className="bi bi-plus-circle"></i>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Block */}
            <div className="cta-block mt-5 pt-3" data-aos="fade-up" data-aos-delay="200">
              <div className="row align-items-center">
                <div className="col-lg-8" data-aos="fade-right" data-aos-delay="300">
                  <h3>Ready to Experience Student Life?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius felis nec sem viverra.</p>
                </div>
                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0" data-aos="fade-left" data-aos-delay="400">
                  <a href="#" className="btn btn-primary">Schedule a Visit</a>
                  <a href="#" className="btn btn-outline-primary ms-2">Contact Us</a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
