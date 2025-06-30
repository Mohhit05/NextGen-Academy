import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function Academics() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"Academics"} />

        {/* Academics Section */}
        <section id="academics" className="academics section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">

            {/* Intro Section */}
            <div className="row mb-5">
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                <div className="section-intro pe-lg-5">
                  <h3 className="section-heading">Discover Our Educational Excellence</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, possimus quidem. Necessitatibus cum neque deserunt ab porro!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, fugiat labore. Veritatis et omnis consequatur.</p>
                  <div className="cta-buttons mt-4">
                    <a href="#" className="btn btn-primary me-3">Explore Programs</a>
                    <a href="#" className="btn btn-outline">Request Information</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
                <div className="row key-metrics g-4">
                  {[
                    { value: 45, label: "Undergraduate Programs" },
                    { value: 28, label: "Graduate Degrees" },
                    { value: 92, label: "Graduation Rate", isPercent: true },
                    { value: 15, label: "Student-Faculty Ratio", suffix: ":1" }
                  ].map((item, idx) => (
                    <div className="col-6" key={idx}>
                      <div className="metric-card">
                        <h2>
                          <span className="purecounter" data-purecounter-start="0" data-purecounter-end={item.value} data-purecounter-duration="1"></span>
                          {item.isPercent ? "%" : item.suffix || "+"}
                        </h2>
                        <p>{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Programs Section */}
            <div className="programs-section mb-5">
              <div className="section-header text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                <h3>Our Academic Programs</h3>
                <p>Explore our diverse range of undergraduate and graduate programs</p>
              </div>

              <ul className="programs-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" className="filter-active">All Programs</li>
                <li data-filter=".filter-undergraduate">Undergraduate</li>
                <li data-filter=".filter-graduate">Graduate</li>
                <li data-filter=".filter-certificate">Certificates</li>
              </ul>

              {/* Replace the below content with dynamic cards if needed */}
              {/* Your card list remains the same — just ensure class -> className and comments are valid */}

            </div>

            {/* Faculty Section */}
            <div className="faculty-section">
              <div className="section-header text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                <h3>Meet Our Faculty</h3>
                <p>Learn from experienced educators and industry leaders</p>
              </div>

              <div className="row g-4">
                {/* Repeat this faculty-card for other faculty as well */}
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="faculty-card">
                    <div className="faculty-img">
                      <img src="assets/img/person/person-m-3.webp" alt="Dr. Michael Reynolds" className="img-fluid" />
                    </div>
                    <div className="faculty-content">
                      <h4>Dr. Michael Reynolds</h4>
                      <p className="faculty-position">Computer Science</p>
                      <div className="faculty-social">
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more cards similarly */}
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
