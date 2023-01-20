import React from "react";
import "../Footer/Footer.css";
import Footers from "../../asset/fo.png";
import { GoLocation } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="Footer_wrapper">
      <hr />

      <div className="Footer">
        <div className="flogo">
          <img src={Footers} alt="" />
          <span>Toko Hari</span>
        </div>

        <div className="block">
          <div className="detail">
            <span>Contact Us</span>
            <span className="pngLine">
              <GoLocation className="icon" />
              <span>111 jakarta indonesia</span>
            </span>
          </div>
          <span className="pngLine">
            <IoIosContact className="icon" />
            <span>111 jakarta indonesia</span>
          </span>
          <span className="pngLine">
            <HiOutlineMail className="icon" />
            <span>111 jakarta indonesia</span>
          </span>
          <span className="pngLine">
            <HiOutlineMail className="icon" />
            <span>111 jakarta indonesia</span>
          </span>
        </div>

        <div className="block">
          <div className="detail">
            <span>Account</span>
            <span className="pngLine">
              <BiLogIn className="icon" />
              <span>111 jakarta indonesia</span>
            </span>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="copyRight">
        <span>CopyRight &copy; 2022 by TokoHari, Inc</span>
        <span></span>
      </div>
    </div>
  );
};

export default Footer;
