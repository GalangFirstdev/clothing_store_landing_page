import React from "react";
// import Image from "../../asset/middle_image.png";
import "../Hero/Hero.css";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container_first">
      {/* left text */}
      <div className="h_sides">
        <span className="text1">this is mystore</span>

        <div className="text2">
          <span>trendy colecction</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            vero?
          </span>
        </div>
      </div>

      {/* middle hero image */}
      <div className="wrapper_first">
        <div className="Bluecircle"></div>
        {/* <img src={Image} alt="" width={500} /> */}
        <div className="cart2">
          <RiShoppingBagFill />
          <div className="signup">
            <span>
              <a href="">Call me  </a>
            </span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="h_sides">
        <div className="traffic">
          <span>100k</span>
          <span>Montyy Traffic</span>
        </div>
        <div className="customer">
          <span>100k</span>
          <span>happy customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
