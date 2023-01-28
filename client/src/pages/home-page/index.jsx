import React from "react";
import { Helmet } from "react-helmet";
import "./index.scss";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardSolutions from "../../components/cards";
const HomePage = () => {
  return (
    <div id="home-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>busicol</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section id="slider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <div className="first">
              <div className="container">
                <div className="text">
                  <h1>Grow Big With Musicol Business</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid quod possimus a laboriosam enim consequuntur.
                  </p>
                  <div className="btns">
                    <button className="ourBtn">Our Services</button>
                    <button className="workBtn">See How It Work</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="second">
              <div className="container">
                <div className="text">
                  <h1>Grow Big With Musicol Business</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid quod possimus a laboriosam enim consequuntur.
                  </p>
                  <div className="btns">
                    <button className="ourBtn">Our Services</button>
                    <button className="workBtn">See How It Work</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="container"></div>
      </section>
      <CardSolutions />
      <section id="experts">
        <div className="left"></div>
        <div className="right">
          <div className="container">
            <div className="about">
              <h1>The Largest Business Expert</h1>
              <p>
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice is untrammelled and when
                nothing prevents our being able to do what we like best.
              </p>
              <ul>
                <li>
                  {" "}
                  <div className="icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Apartments frequently or motionless.
                </li>
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Duis aute irure dolor in reprehenderit in voluptate.
                </li>
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  Voluptatem quia voluptas sit aspernatur.
                </li>
              </ul>
              <button>About Us</button>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="about">
            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-landmark-dome"></i>
              </div>
              <h3>Unlimited Control</h3>
              <p>These cases are perfectly simple and easy to</p>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-landmark-dome"></i>
              </div>
              <h3>Rapidly Growth</h3>
              <p>These cases are perfectly simple and easy to</p>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fa-solid fa-landmark-dome"></i>
              </div>
              <h3>Problem Solving</h3>
              <p>These cases are perfectly simple and easy to</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div className="contact">
            <h1>Do you Have any Project?</h1>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus.
            </p>
            <div className="btn">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
