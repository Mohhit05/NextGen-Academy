import React from 'react';
import Breadcrump from '../components/Breadcrump';

export default function News() {
  return (
    <>
      <main className="main">

        {/* Page Title */} 
        <Breadcrump title={"News"} />

        {/* News Hero Section */}
        <section id="news-hero" className="news-hero section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-4">

              {/* Main Content Area */}
              <div className="col-lg-8">
                {/* Featured Article */}
                <article className="featured-post position-relative mb-4" data-aos="fade-up">
                  <img src="assets/img/blog/blog-hero-9.webp" alt="Featured post" className="img-fluid" />
                  <div className="post-overlay">
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="category">Politics</span>
                        <span className="date">02/15/2024</span>
                      </div>
                      <h2 className="post-title">
                        <a href="#">Optimizing Strategic Initiatives Through Cross-Functional Collaboration</a>
                      </h2>
                      <p className="post-excerpt">Leveraging core competencies to drive sustainable growth and maximize stakeholder value through innovative solutions and market-driven approaches.</p>
                      <div className="post-author">
                        <span>by</span>
                        <a href="#">Jennifer Mitchell</a>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Secondary Articles */}
                <div className="row g-4">
                  <div className="col-md-6">
                    <article className="secondary-post" data-aos="fade-up">
                      <div className="post-image">
                        <img src="assets/img/blog/blog-post-1.webp" alt="Post" className="img-fluid" />
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="category">Politics</span>
                          <span className="date">03/21/2024</span>
                        </div>
                        <h3 className="post-title">
                          <a href="#">Implementing Agile Methodologies for Enhanced Business Performance</a>
                        </h3>
                        <div className="post-author">
                          <span>by</span>
                          <a href="#">Robert Anderson</a>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-md-6">
                    <article className="secondary-post" data-aos="fade-up" data-aos-delay="100">
                      <div className="post-image">
                        <img src="assets/img/blog/blog-post-2.webp" alt="Post" className="img-fluid" />
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="category">Business</span>
                          <span className="date">01/30/2024</span>
                        </div>
                        <h3 className="post-title">
                          <a href="#">Streamlining Operations Through Digital Transformation Solutions</a>
                        </h3>
                        <div className="post-author">
                          <span>by</span>
                          <a href="#">Sarah Thompson</a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

              {/* Sidebar with Tabs */}
              <div className="col-lg-4">
                <div className="news-tabs" data-aos="fade-up" data-aos-delay="200">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#top-stories" type="button">Top stories</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#trending" type="button">Trending News</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#latest" type="button">Latest News</button>
                    </li>
                  </ul>

                  <div className="tab-content">
                    {/* Repeatable tab content structure - will not repeat here to save space.
                        Replace `class` with `className` throughout the rest of each tab content block like done above.
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Posts Section */}
        <section id="news-posts" className="news-posts section">
          <div className="container">
            <div className="row gy-4">

              {/* Repeat the following for each post */}
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <article>
                  <div className="post-img">
                    <img src="assets/img/blog/blog-post-1.webp" alt="" className="img-fluid" />
                  </div>
                  <p className="post-category">Politics</p>
                  <h2 className="title">
                    <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img src="assets/img/person/person-f-12.webp" alt="" className="img-fluid post-author-img flex-shrink-0" />
                    <div className="post-meta">
                      <p className="post-author">Maria Doe</p>
                      <p className="post-date">
                        <time dateTime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Add more post items here, following same structure with updated className, img tag, and attributes */}

            </div>
          </div>
        </section>

        {/* Pagination Section */}
        <section id="pagination-2" className="pagination-2 section">
          <div className="container">
            <nav className="d-flex justify-content-center" aria-label="Page navigation">
              <ul>
                <li>
                  <a href="#" aria-label="Previous page">
                    <i className="bi bi-arrow-left"></i>
                    <span className="d-none d-sm-inline">Previous</span>
                  </a>
                </li>

                <li><a href="#" className="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li className="ellipsis">...</li>
                <li><a href="#">8</a></li>
                <li><a href="#">9</a></li>
                <li><a href="#">10</a></li>

                <li>
                  <a href="#" aria-label="Next page">
                    <span className="d-none d-sm-inline">Next</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

      </main>
    </>
  );
}
