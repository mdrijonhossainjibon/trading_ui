import { useState, Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";
import "./WEBHEADER.css";
import {
  DownloadOutlined,
  GlobalOutlined,
  DownOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { QRCode, Space, Card } from "antd";
import { useNavigate } from "react-router-dom";
import {
  DownlandOutline,
  UserCircleOutline,
  MessageOutline,
  RightOutline,
  BellOutline,
  UserOutline,
} from "antd-mobile-icons";

export const WEBHEADER = () => {
  const [isLogin, setLogin] = useState(true);
  const [qrshow, setqr] = useState(false);
  const [Language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  function handleLanguageChange(lang) {
    if (Language === "en") {
      setLanguage(lang);
      i18n.changeLanguage(lang);
    } else if (Language === "bn") {
      setLanguage("en");
      i18n.changeLanguage("en");
    }
  }
  return (
    <Suspense
      children={
        <div className="Suspense-s">
          <Spin />
        </div>
      }
    >
      <div className="header">
        <div className="header-logo-div" onClick={() => navigate("/")}>
          <img src="https://www.bybit.com/common-static/fhs/bybit-home-new/logo-dark.svg" />
        </div>
        <ul className="header-ul">
          <li>
            {t("buy-crypto")} <DownOutlined />
          </li>
          <li>{t("market")}</li>
          <li>
            {t("Trading")} <DownOutlined />
          </li>
          <li>
            {t("Earn")} <DownOutlined />
          </li>
        </ul>
        {qrshow ? (
          <div className="qrcode-dawan">
            <Space wrap>
              {" "}
              <QRCode
                value="https://2uv9vu-3000.csb.app/"
                size={120}
                icon="https://www.bybit.com/common-static/fhs/bybit-home-new/logo-dark.svg"
              />{" "}
            </Space>
            <div className="notes-andt">{t("W")}</div>
            <div className="app-cont">
              you can't dawnload app ? <RightOutline />
            </div>
          </div>
        ) : null}
        <div className="right-login--reg">
          {isLogin ? (
            <>
              <div> Blalance </div>
              <div>Order</div>
              <UserOutline />
              <BellOutline />
              <DownlandOutline
                onMouseEnter={() => setqr(true)}
                onMouseLeave={() => setqr(false)}
                className="d-icons"
              />
              <GlobalOutlined
                onClick={() => handleLanguageChange("bn")}
                className="g-icons"
              />
            </>
          ) : (
            <>
              <div className="Login">{t("L")}</div>
              <div className="Register">{t("R")}</div>
              <DownlandOutline
                onMouseEnter={() => setqr(true)}
                onMouseLeave={() => setqr(false)}
                className="d-icons"
              />
              <GlobalOutlined
                onClick={() => handleLanguageChange("bn")}
                className="g-icons"
              />
            </>
          )}
        </div>
        <div className="popup">wdrw</div>
      </div>
    </Suspense>
  );
};
