import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Navigation, Autoplay } from 'swiper/modules';

export default function Testimonial() {
  return (
    <>
      <section id="testimonials" className="testimonials section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            speed={600}
            autoplay={{ delay: 4000 }} 
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[ Navigation, Autoplay]}
          >
            {/* Swiper Slides */}
            <SwiperSlide>
              <div className="testimonial-item" data-aos="zoom-in" data-aos-delay="200">
                <div className="testimonial-header">
                  <img src="assets/img/person/person-f-12.webp" alt="Client" className="img-fluid" loading="lazy" />
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                </div>
                <div className="testimonial-body">
                  <p>Great environment and excellent support from faculty. My journey here has been transformational.</p>
                </div>
                <div className="testimonial-footer">
                  <h5>Jessica Martinez</h5>
                  <span>UX Designer</span>
                  <div className="quote-icon">
                    <i className="bi bi-chat-quote-fill"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item" data-aos="zoom-in" data-aos-delay="200">
                <div className="testimonial-header">
                  <img src="assets/img/person/person-m-11.webp" alt="Client" className="img-fluid" loading="lazy" />
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                </div>
                <div className="testimonial-body">
                  <p>This college gave me the platform and confidence to excel in both academics and life.</p>
                </div>
                <div className="testimonial-footer">
                  <h5>Michael Doe</h5>
                  <span>Full Stack Developer</span>
                  <div className="quote-icon">
                    <i className="bi bi-chat-quote-fill"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Navigation Buttons */}
          <div className="swiper-navigation">
            <div className="swiper-button-prev" ></div>
          <div className="swiper-button-next" ></div>
          </div>
        </div>
      </section>
    </>
  );
}
