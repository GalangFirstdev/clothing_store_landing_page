import React from "react";
import "../Testimonial/Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Testimonial as Testimonials } from "../../Data/Testimonial";
const Testimonial = () => {
  return (
    <div className="Testimonials">
      <div className="wrapper_T">
        <div className="Container_T">
          <span>Top Rated</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            illum voluptates rerum.
          </span>
        </div>
        <img src="" alt="" />

        <div className="Container_T">
          <span>100K</span>
          <span>Happy Customer with us</span>
        </div>
      </div>

      <div className="reviews">Reviews</div>

      <div className="corousel">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={30}
          className="tCorousel"
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            780: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {Testimonials.map((Testimonial, i) => (
            <SwiperSlide>
              <div className="Testimonial">
                <img src={Testimonial.image} alt="" />
                <hr />
                <span>{Testimonial.comment}</span>
                <span>{Testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
