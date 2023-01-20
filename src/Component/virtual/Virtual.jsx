import React from "react";
import "../virtual/Virtual.css";
import ReactCompareImage from "react-compare-image";
import Before from "../../asset/Distroimg2.jpg";
import After from "../../asset/Distroimg3.jpg";

const Virtual = () => {
  return (
    <>
      <div className="Virtual-S">
        <div className="left">
          <span>Virtual ty-on</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          </span>
          <br />
          <span>Lorem, ipsum.</span>
        </div>

        {/* in the right */}

        <div className="Right">
          <div className="wrapper_s">
            <ReactCompareImage leftImage={Before} rightImage={After} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Virtual;
