import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// import swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider/slider.css";

import { SliderProducts } from "../../Data/Product.js";

function Slider() {
  return (
    <div className="s-container">
      {/* breakpoint di gunakan untuk responsive di design di swiper */}
      <Swiper
        breakpoints={{
          780: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwipper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((Slide, i) => (
          <div>
            <SwiperSlide>
              <div className="left-s">
                <div className="name">
                  <span>{Slide.name}</span>
                  <span>{Slide.detail}</span>
                </div>
                <span>{Slide.price}$</span>
                <div>Shop now</div>
              </div>
              <img
                src={Slide.img}
                alt="product"
                className="img-products"
                width={200}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
