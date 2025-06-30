import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function Alumni() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"Alumni"} />

        {/* Alumni Section */}
        <section id="alumni" className="alumni section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            
            {/* Alumni Intro */}
            <div className="row mb-5">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="alumni-intro">
                  <h2>Our Alumni Network</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                  <div className="alumni-stats d-flex flex-wrap">
                    <div className="stat-item">
                      <span className="stat-number">25k+</span>
                      <span className="stat-label">Alumni Worldwide</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">118</span>
                      <span className="stat-label">Countries</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">65+</span>
                      <span className="stat-label">Years of Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="alumni-image">
                  <img src="assets/img/education/campus-8.webp" alt="Alumni gathering" className="img-fluid rounded" />
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="row mb-5">
              <div className="col-12 text-center mb-4" data-aos="fade-up" data-aos-delay="200">
                <h3>Success Stories</h3>
                <p className="lead">Meet some of our distinguished alumni making a difference around the world</p>
              </div>

              {/* Alumni Cards */}
              {[
                {
                  name: "Dr. Michael Roberts",
                  classYear: "Class of 2007",
                  position: "Chief Medical Officer, Global Health Initiative",
                  image: "assets/img/person/person-m-4.webp",
                  delay: 300
                },
                {
                  name: "Sarah Chen, Ph.D.",
                  classYear: "Class of 2010",
                  position: "Senior Researcher at NASA",
                  image: "assets/img/person/person-f-6.webp",
                  delay: 400
                },
                {
                  name: "James Wilson",
                  classYear: "Class of 2012",
                  position: "Founder & CEO, GreenTech Solutions",
                  image: "assets/img/person/person-m-9.webp",
                  delay: 500
                }
              ].map((alumni, idx) => (
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={alumni.delay} key={idx}>
                  <div className="alumni-card">
                    <div className="alumni-image">
                      <img src={alumni.image} alt="Alumni" className="img-fluid" />
                    </div>
                    <div className="alumni-content">
                      <h4>{alumni.name}</h4>
                      <p className="alumni-class">{alumni.classYear}</p>
                      <p className="alumni-position">{alumni.position}</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                      <a href="#" className="read-more">Read full story <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-12 text-center mt-3" data-aos="fade-up" data-aos-delay="600">
                <a href="#" className="btn btn-primary">View More Success Stories</a>
              </div>
            </div>

            {/* Alumni Events */}
            <div className="row mb-5 alumni-events-section">
              <div className="col-12 mb-4 text-center" data-aos="fade-up" data-aos-delay="200">
                <h3>Upcoming Alumni Events</h3>
                <p className="lead">Connect with fellow graduates at these exciting events</p>
              </div>

              {/* Event Cards */}
              {[
                {
                  day: "15",
                  month: "MAR",
                  title: "Annual Alumni Reunion",
                  location: "Main Campus, Grand Hall",
                  time: "6:00 PM - 10:00 PM",
                  delay: 300
                },
                {
                  day: "22",
                  month: "APR",
                  title: "Career Networking Night",
                  location: "Downtown Convention Center",
                  time: "7:00 PM - 9:30 PM",
                  delay: 400
                }
              ].map((event, idx) => (
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={event.delay} key={idx}>
                  <div className="event-card">
                    <div className="event-date">
                      <span className="event-day">{event.day}</span>
                      <span className="event-month">{event.month}</span>
                    </div>
                    <div className="event-details">
                      <h4>{event.title}</h4>
                      <p><i className="bi bi-geo-alt"></i> {event.location}</p>
                      <p><i className="bi bi-clock"></i> {event.time}</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                      <a href="#" className="btn btn-outline-primary">Register Now</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-12 text-center mt-4" data-aos="fade-up" data-aos-delay="500">
                <a href="#" className="btn btn-link">View All Events <i className="bi bi-calendar-check"></i></a>
              </div>
            </div>

            {/* Get Involved */}
            <div className="row get-involved-section">
              <div className="col-12 text-center mb-4" data-aos="fade-up" data-aos-delay="200">
                <h3>Get Involved</h3>
                <p className="lead">Ways to stay connected and give back to your alma mater</p>
              </div>

              {/* Involvement Cards */}
              {[
                { title: "Mentor a Student", icon: "bi-hand-thumbs-up", btn: "Learn More", delay: 300 },
                { title: "Scholarship Fund", icon: "bi-award", btn: "Donate Now", delay: 400 },
                { title: "Alumni Association", icon: "bi-people", btn: "Join Today", delay: 500 }
              ].map((card, idx) => (
                <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={card.delay} key={idx}>
                  <div className="involvement-card">
                    <div className="involvement-icon">
                      <i className={`bi ${card.icon}`}></i>
                    </div>
                    <h4>{card.title}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <a href="#" className="btn btn-sm btn-outline-primary mt-2">{card.btn}</a>
                  </div>
                </div>
              ))}

              <div className="col-12 mt-4" data-aos="fade-up" data-aos-delay="600">
                <div className="donation-banner">
                  <div className="row align-items-center">
                    <div className="col-lg-8 mb-3 mb-lg-0">
                      <h3>Support the Future Generation</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                      <a href="#" className="btn btn-primary btn-lg">Make a Donation</a>
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
