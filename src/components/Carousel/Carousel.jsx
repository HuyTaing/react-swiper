import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import { mountains } from "../../data/mountain";

import "swiper/css";
import "swiper/css/bundle";
import "./Carousel.css";

const Carousel = () => {
  const renderedCarousel = mountains.map((mountain) => (
    <SwiperSlide
      key={mountain.id}
      style={{ backgroundImage: `url(${mountain.src})` }}
      className="myswiper-slider"
    >
      <div>
        <h2>{mountain.title}</h2>
        <p>{mountain.description}</p>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className="myswiper"
      modules={[EffectCoverflow, Autoplay]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      speed={1200}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      }}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      }}
    >
      {renderedCarousel}
    </Swiper>
  );
};
export default Carousel;
