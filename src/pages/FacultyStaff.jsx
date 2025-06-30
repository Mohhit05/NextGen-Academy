import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function FacultyStaff() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"Faculty Staff"} />
        {/* End Page Title */}

        {/* Faculty Staff Section */}
        <section id="faculty--staff" className="faculty--staff section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row mb-5">
              <div className="col-lg-8 mx-auto">
                <div className="faculty-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search faculty by name, department or research area..."
                    />
                    <button className="search-btn" type="button">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                  <div className="search-filters mt-3 d-flex flex-wrap">
                    <div className="filter-item active">All</div>
                    <div className="filter-item">Professors</div>
                    <div className="filter-item">Associate Professors</div>
                    <div className="filter-item">Assistant Professors</div>
                    <div className="filter-item">Staff</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="faculty-grid">
              <div className="row g-4">
                {/* Faculty Members */}
                {[
                  {
                    name: "Dr. Thomas Reynolds",
                    position: "Professor of Computer Science",
                    department: "School of Computing",
                    tags: ["Artificial Intelligence", "Machine Learning", "Neural Networks"],
                    img: "assets/img/person/person-m-3.webp"
                  },
                  {
                    name: "Dr. Sarah Johnson",
                    position: "Associate Professor of Biology",
                    department: "Department of Life Sciences",
                    tags: ["Molecular Biology", "Genetics", "Biotechnology"],
                    img: "assets/img/person/person-f-5.webp"
                  },
                  {
                    name: "Dr. Michael Chen",
                    position: "Assistant Professor of Physics",
                    department: "Department of Physical Sciences",
                    tags: ["Quantum Mechanics", "Particle Physics", "Astrophysics"],
                    img: "assets/img/person/person-m-7.webp"
                  },
                  {
                    name: "Dr. Elizabeth Parker",
                    position: "Professor of Literature",
                    department: "College of Humanities",
                    tags: ["Modern Literature", "Critical Theory", "Creative Writing"],
                    img: "assets/img/person/person-f-8.webp"
                  },
                  {
                    name: "Dr. Robert Williams",
                    position: "Associate Professor of Economics",
                    department: "Business School",
                    tags: ["Macroeconomics", "International Trade", "Economic Policy"],
                    img: "assets/img/person/person-m-11.webp"
                  },
                  {
                    name: "Dr. Jennifer Lopez",
                    position: "Assistant Professor of Psychology",
                    department: "Department of Behavioral Sciences",
                    tags: ["Cognitive Psychology", "Child Development", "Behavioral Studies"],
                    img: "assets/img/person/person-f-12.webp"
                  }
                ].map((faculty, index) => (
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={100 * ((index % 3) + 1)}
                    key={index}
                  >
                    <div className="faculty-card">
                      <div className="faculty-image">
                        <img src={faculty.img} className="img-fluid" alt="Faculty Member" />
                        <div className="social-links">
                          <a href="#"><i className="bi bi-twitter"></i></a>
                          <a href="#"><i className="bi bi-linkedin"></i></a>
                          <a href="#"><i className="bi bi-envelope"></i></a>
                        </div>
                      </div>
                      <div className="faculty-info">
                        <h3>{faculty.name}</h3>
                        <p className="position">{faculty.position}</p>
                        <div className="department">{faculty.department}</div>
                        <div className="research-tags">
                          {faculty.tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                          ))}
                        </div>
                        <a href="#" className="profile-link">View Profile</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pagination-container mt-5 d-flex justify-content-center" data-aos="fade-up">
              <nav aria-label="Faculty pagination">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <i className="bi bi-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <i className="bi bi-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </section>
        {/* /Faculty Staff Section */}

      </main>
    </>
  );
}
