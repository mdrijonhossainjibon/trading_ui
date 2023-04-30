import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import "./tabs.css";

const images = [
  {
    id: 1,
    url: "https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-04-28/8fb4e155-b2a2-4d15-b5d2-6478a665914a.jpg",
  },
  {
    id: 1,
    url: "https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-04-15/d7353e4b-f6bb-4ec4-8328-1a69af2166ff.jpg",
  },
  {
    id: 1,
    url: "https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-04-28/c59b4777-eefa-4a65-9775-ef659b7aec03.jpg",
  },
  {
    id: 1,
    url: "https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-01-20/2ad3fd8c-617e-4169-ac95-102cfc7213a7.jpg",
  },
  {
    id: 1,
    url: "https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2022-12-21/7b94aad2-f7e1-4d4e-874a-e89989968ffd.jpg",
  },
];

export const WEBSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    variableWidth: true,
  };
  return (
    <>
      <Slider {...settings}>
        {images.map((url) => (
          <div className="banner-items">
            <img src={url.url} onClick={() => window.open(url.url)} />
          </div>
        ))}
      </Slider>
    </>
  );
};
