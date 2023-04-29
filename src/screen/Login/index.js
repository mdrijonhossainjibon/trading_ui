//import "antd/dist/antd.min.css";
import {
  Button,
  Input,
  Carousel,
  notification,
  Table,
  Space,
  Dropdown,
  Menu,
} from "antd";
import {
  DownloadOutlined,
  GlobalOutlined,
  DownOutlined,
  SoundOutlined,
} from "@ant-design/icons";

import "./LoginScreen.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Components } from "../../components/";
import { useTranslation } from "react-i18next";
//const Manuarr = ["Buy Credit Card", "MARKET", "Trading", "Earn", "Airdrop"];

export const LogInScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="home-page">
        <div className="loading-page-title">
          <div className="ex-name">DEMO Global</div>
          <div className="ex-name1">
            {t("welcome-text")}
            The World's Leading Blockchain Digital Asset Trading Platform
          </div>
          <div className="ex-name2">
            {" "}
            Hassle-free Trading among BTC, ETH, USDT and Other Cryptos
          </div>
        </div>

        <div className="loading-page-rg">
          <Button className="login-btn" name="Login" title="Login">
            Login
          </Button>
          <Button className="rg-btn" name="Login" title="Register">
            Register
          </Button>
        </div>

        <Components.WEBSlider />

        <div className="banner-not">
          <div className="news">
            <SoundOutlined />
            <div style={{ marginLeft: "15px", fontSize: "14px" }}>TEXTTT</div>
          </div>
        </div>
      </div>
    </>
  );
};
