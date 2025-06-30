import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function EventDetails() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"Event Details"} />

        {/* Event Section */}
        <section id="event" className="event section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
              <div className="col-lg-8">
                <div className="event-image mb-4" data-aos="fade-up">
                  <img src="assets/img/education/events-9.webp" alt="Event" className="img-fluid rounded" />
                </div>

                <div className="event-meta mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="meta-item">
                        <i className="bi bi-calendar-date"></i>
                        <span>10/24/2023</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="meta-item">
                        <i className="bi bi-clock"></i>
                        <span>3:00 PM - 6:00 PM</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="meta-item">
                        <i className="bi bi-geo-alt"></i>
                        <span>Main Auditorium</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="event-content" data-aos="fade-up" data-aos-delay="200">
                  <h2>Annual Science Exhibition</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non mauris maximus, finibus dui eget, rhoncus diam...
                  </p>
                  <p>
                    Donec cursus, sapien vel convallis lobortis, dolor nisl pharetra est, ac facilisis ligula sapien vel justo...
                  </p>

                  <h3 className="mt-4">Event Highlights</h3>
                  <ul className="event-highlights">
                    <li><i className="bi bi-check-circle"></i><span>Interactive student presentations of scientific experiments</span></li>
                    <li><i className="bi bi-check-circle"></i><span>Special lecture by renowned physicist Dr. Robert Jenkins</span></li>
                    <li><i className="bi bi-check-circle"></i><span>Robotics competition with prizes for top three teams</span></li>
                    <li><i className="bi bi-check-circle"></i><span>Science demonstrations by faculty members</span></li>
                    <li><i className="bi bi-check-circle"></i><span>Exhibition of innovative student projects</span></li>
                  </ul>

                  <h3 className="mt-4">Event Schedule</h3>
                  <div className="schedule-table">
                    {[
                      { time: "3:00 PM - 3:30 PM", title: "Opening Ceremony", desc: "Welcome address by Principal and introduction to the event" },
                      { time: "3:30 PM - 4:30 PM", title: "Student Project Presentations", desc: "Selected students showcase their scientific innovations" },
                      { time: "4:30 PM - 5:15 PM", title: "Guest Lecture", desc: "Special lecture on \"Future of Quantum Computing\" by Dr. Robert Jenkins" },
                      { time: "5:15 PM - 5:45 PM", title: "Robotics Demonstration", desc: "Live demonstration of student-built robots and automation projects" },
                      { time: "5:45 PM - 6:00 PM", title: "Award Ceremony & Closing", desc: "Distribution of certificates and recognition of outstanding projects" }
                    ].map((item, idx) => (
                      <div className="schedule-row" key={idx}>
                        <div className="schedule-time">{item.time}</div>
                        <div className="schedule-activity">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="event-gallery mt-5" data-aos="fade-up" data-aos-delay="300">
                    <h3>Event Gallery</h3>
                    <p>Images from previous year's science exhibition:</p>
                    <div className="row g-4 mt-2">
                      {["events-1.webp", "events-2.webp", "events-3.webp"].map((img, index) => (
                        <div className="col-md-4" key={index}>
                          <a href={`assets/img/education/${img}`} className="glightbox">
                            <img src={`assets/img/education/${img}`} alt="Event Gallery" className="img-fluid rounded" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="event-sidebar">
                  <div className="sidebar-widget registration-form" data-aos="fade-left" data-aos-delay="200">
                    <h3>Register for this Event</h3>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="phone" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="student-type" className="form-label">You are a</label>
                        <select className="form-select" id="student-type">
                          <option value="">Select an option</option>
                          <option value="student">Student</option>
                          <option value="parent">Parent</option>
                          <option value="teacher">Teacher</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-register">Register Now</button>
                      </div>
                    </form>
                  </div>

                  <div className="sidebar-widget organizer-info" data-aos="fade-left" data-aos-delay="300">
                    <h3>Event Organizer</h3>
                    <div className="organizer-details">
                      <div className="organizer-image">
                        <img src="assets/img/person/person-m-5.webp" className="img-fluid rounded" alt="Organizer" />
                      </div>
                      <div className="organizer-content">
                        <h4>Prof. Michael Anderson</h4>
                        <p className="organizer-position">Head of Science Department</p>
                        <p>For queries related to the event, please contact:</p>
                        <div className="organizer-contact">
                          <p><i className="bi bi-envelope"></i> michael@example.com</p>
                          <p><i className="bi bi-telephone"></i> +1 (555) 123-4567</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-widget related-events" data-aos="fade-left" data-aos-delay="400">
                    <h3>Related Events</h3>
                    {[
                      { day: "15", month: "Nov", title: "Mathematics Olympiad", location: "Room 203, East Wing" },
                      { day: "05", month: "Dec", title: "Literature Festival", location: "Central Library" },
                      { day: "18", month: "Dec", title: "Annual Sports Meet", location: "School Ground" }
                    ].map((event, idx) => (
                      <div className="related-event-item" key={idx}>
                        <div className="related-event-date">
                          <span className="day">{event.day}</span>
                          <span className="month">{event.month}</span>
                        </div>
                        <div className="related-event-info">
                          <h4>{event.title}</h4>
                          <p><i className="bi bi-geo-alt"></i> {event.location}</p>
                        </div>
                      </div>
                    ))}
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
