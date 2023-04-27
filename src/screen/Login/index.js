//import "antd/dist/antd.min.css";
import { Button, Input, Carousel, notification, Table, Space } from "antd";
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

const Manuarr = ["Buy Credit Card", "MARKET", "Trading", "Earn", "Airdrop"];

export const LogInScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ["Home", "About", "Services", "Contact"];
  return (
    <>
      <div className="header">
        <div className="header-logo-div">LOGO</div>
        <ul className="header-ul">
          <li>
            Buy Crypto <DownOutlined  onClick={toggleMenu}/>
          </li>
          <li>MARKET </li>
          <li>
            Trading <DownOutlined  onClick={toggleMenu}/>
          </li>
          <li>
            Earn <DownOutlined  onClick={toggleMenu}/>
          </li>
        </ul>
        <div className="right-login--reg">
          <div className="Login">Login</div>
          <div className="Register">Register</div>
          <DownloadOutlined className="d-icons" />
          <GlobalOutlined className="g-icons" />
        </div>
        <div className="popup">wdrw</div>
      </div>

      <div className="home-page">
        <div className="loading-page-title">
          <div className="ex-name"> DEMO Global </div>
          <div className="ex-name1">
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
            {" "}
            <SoundOutlined />{" "}
            <div style={{ marginLeft: "15px", fontSize: "14px" }}>
              TEXTTT
            </div>{" "}
          </div>
        </div>

        <div className="dropdown-menu">
          <button className="dropdown-menu__toggle" >
            Menu
          </button>
          <ul
            className={`dropdown-menu__list ${
              isOpen ? "dropdown-menu__list--open" : ""
            }`}
          >
            {menuItems.map((item) => (
              <li key={item} className="dropdown-menu__item">
                <a href={`/${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
