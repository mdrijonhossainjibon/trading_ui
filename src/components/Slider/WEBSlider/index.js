import Slider from "react-slick";
import React, { useState, useEffect } from "react";
//import "./tabs.css";

const images = [
  {
    id: 1,
    url: "https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-04-15/d7353e4b-f6bb-4ec4-8328-1a69af2166ff.jpg",
  },
];

export const WEBSlider = () => {
  return (
    <div className="banner-items">
      <img src="https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-04-15/d7353e4b-f6bb-4ec4-8328-1a69af2166ff.jpg" />
    </div>
  );
};
