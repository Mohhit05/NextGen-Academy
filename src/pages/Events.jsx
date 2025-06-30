import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function Events() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"Events"} />

        {/* Events Extended Section */}
        <section id="events-extended" className="events-extended section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row">
              <div className="col-lg-8">
                {/* Events List */}
                <div className="events-list">
                  {[{
                    day: "15", month: "May", title: "Annual Science Exhibition",
                    time: "09:00 AM - 04:00 PM", location: "Main Campus Auditorium",
                    description: "Lorem ipsum dolor sit amet..."
                  }, {
                    day: "22", month: "May", title: "Parent-Teacher Conference",
                    time: "02:00 PM - 06:00 PM", location: "School Conference Center",
                    description: "Duis aute irure dolor in reprehenderit..."
                  }, {
                    day: "05", month: "Jun", title: "Annual Sports Tournament",
                    time: "10:00 AM - 05:00 PM", location: "Campus Sports Ground",
                    description: "Ut enim ad minim veniam..."
                  }, {
                    day: "12", month: "Jun", title: "Graduation Ceremony 2023",
                    time: "04:00 PM - 07:00 PM", location: "University Grand Hall",
                    description: "Sed ut perspiciatis unde omnis..."
                  }, {
                    day: "20", month: "Jun", title: "Summer Arts Festival",
                    time: "11:00 AM - 08:00 PM", location: "Arts Center",
                    description: "Nemo enim ipsam voluptatem..."
                  }].map((event, idx) => (
                    <div className="event-item" data-aos="fade-up" data-aos-delay={idx * 100} key={idx}>
                      <div className="event-date">
                        <span className="day">{event.day}</span>
                        <span className="month">{event.month}</span>
                      </div>
                      <div className="event-content">
                        <h3 className="event-title">{event.title}</h3>
                        <div className="event-meta">
                          <span><i className="bi bi-clock"></i> {event.time}</span>
                          <span><i className="bi bi-geo-alt"></i> {event.location}</span>
                        </div>
                        <p className="event-description">{event.description}</p>
                        <a href="#" className="btn-event-details">Learn More <i className="bi bi-arrow-right"></i></a>
                      </div>
                    </div>
                  ))}

                  {/* Pagination */}
                  <div className="events-pagination" data-aos="fade-up" data-aos-delay="100">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled"><a className="page-link" href="#"><i className="bi bi-arrow-left"></i></a></li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-right"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="events-sidebar">

                  {/* Search Form */}
                  <div className="sidebar-item search-form" data-aos="fade-up">
                    <h4>Search Events</h4>
                    <form>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search Events..." />
                        <button className="btn" type="submit"><i className="bi bi-search"></i></button>
                      </div>
                    </form>
                  </div>

                  {/* Categories */}
                  <div className="sidebar-item categories" data-aos="fade-up" data-aos-delay="100">
                    <h4>Event Categories</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Academic <span>(12)</span></a></li>
                      <li><a href="#">Sports <span>(7)</span></a></li>
                      <li><a href="#">Arts & Culture <span>(9)</span></a></li>
                      <li><a href="#">Workshops <span>(5)</span></a></li>
                      <li><a href="#">Seminars <span>(8)</span></a></li>
                      <li><a href="#">Competitions <span>(6)</span></a></li>
                    </ul>
                  </div>

                  {/* Upcoming Featured Events */}
                  <div className="sidebar-item upcoming-events" data-aos="fade-up" data-aos-delay="200">
                    <h4>Upcoming Featured Events</h4>
                    <div className="featured-event">
                      <img src="assets/img/education/events-5.webp" alt="Event" className="img-fluid" />
                      <div className="featured-event-details">
                        <h5>Summer Leadership Camp</h5>
                        <span className="event-date"><i className="bi bi-calendar"></i> July 10-15, 2023</span>
                        <a href="#" className="btn-sm btn-register">Register Now</a>
                      </div>
                    </div>
                  </div>

                  {/* Event Calendar */}
                  <div className="sidebar-item event-calendar" data-aos="fade-up" data-aos-delay="300">
                    <h4>Event Calendar</h4>
                    <div className="calendar-widget">
                      <div className="calendar-header">
                        <h5>May 2023</h5>
                        <div className="calendar-nav">
                          <a href="#" className="prev-month"><i className="bi bi-chevron-left"></i></a>
                          <a href="#" className="next-month"><i className="bi bi-chevron-right"></i></a>
                        </div>
                      </div>
                      <table className="calendar-table">
                        <thead>
                          <tr>
                            <th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
                          <tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>
                          <tr><td>14</td><td className="has-event">15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
                          <tr><td>21</td><td className="has-event">22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>
                          <tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr>
                        </tbody>
                      </table>
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
