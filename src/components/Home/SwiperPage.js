import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./SwiperPage.css";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);


const SwiperPage = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch('http://nameless-plains-10260.herokuapp.com/packages')
      .then(res => res.json())
      .then(data => setPackages(data));
  }, []);

  return (
    <div className="text-center">
      <div className='main-swiper'>
        <h4 className='sub-title'>The Plan</h4>
        <h1>Perfect Holiday</h1>
        <p>The practice involves swishing oil around in your mouth to remove bacteria, which can turn into plaque and cause your teeth to look yellow.</p>
        <Swiper
          effect={"coverflow"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          {/* using array */}
          {packages.map((pac, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="card">
                  <img src={pac.img} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{pac.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to={`/home/${pac._id}`} className="btn btn-color py-2 px-5">Details</NavLink>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperPage;