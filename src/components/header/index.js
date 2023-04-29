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
import {
  DownlandOutline,
  UserCircleOutline,
  MessageOutline,
  RightOutline,
} from "antd-mobile-icons";

export const WEBHEADER = () => {
  const [isLogin, setLogin] = useState(false);
  const [qrshow, setqr] = useState(false);
  const [Language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();
  function handleLanguageChange(lang) {
    setLanguage(lang);
    i18n.changeLanguage(lang);
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
        <div className="header-logo-div">
          <img src="https://www.bybit.com/common-static/fhs/bybit-home-new/logo-dark.svg" />
        </div>
        <ul className="header-ul">
          <li>
            {t("buy-crypto")} <DownOutlined />
          </li>
          <li>MARKET </li>
          <li>
            Trading <DownOutlined />
          </li>
          <li>
            Earn <DownOutlined />
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
          {isLogin ? null : (
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
