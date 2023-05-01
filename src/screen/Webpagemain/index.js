import { Button, Tabs } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "antd-mobile";

import { Components } from "../../components";
import { Containers } from "../../containers";
import "./Webpagemain.css";

export const Webpagemain = () => {
  const { t } = useTranslation();
  const [Login, setLogin] = useState(true);
  const [activeTab, setActiveTab] = useState("1");

  const [marketData, setMarketData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/mdrijonhossainjibon/trading_ui/main/public/data/market.json"
        );
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMarketData();
  }, []);

  const topPrice = Math.max(...marketData.map((obj) => obj.Price));

  return (
    <>
      <div className="home-page">
        <div className="loading-page-title">
          <div className="ex-name">{t("ex-name")}</div>
          <div className="ex-name1">{t("welcome-text")}</div>
          <div className="ex-name2">{t("ex-name2")}</div>
        </div>
        <div className="loading-page-rg">
          <Button
            className="login-btn"
            name="Login"
            title="Login"
            onClick={() =>
              Login
                ? Toast.show({ content: "Coming Soon" })
                : navigate("/auth/login")
            }
          >
            {Login ? t("buy-crypto") : t("L")}
          </Button>

          <Button
            className="rg-btn"
            name="Login"
            title="Register"
            onClick={() =>
              Login
                ? navigate("/trade/symbol=BTC_USDT")
                : navigate("/auth/register")
            }
          >
            {Login ? t("Trading") : t("R")}
          </Button>
        </div>
        <Components.WEBSlider />
        <div className="banner-not">
          <div className="news">
            <SoundOutlined />
            <div style={{ marginLeft: "15px", fontSize: "14px" }}>TEXTTT</div>
          </div>
        </div>
        <Components.MARKET_TABLE_Tabs
          Trading={
            <Components.CustomTable
              Data={Containers.TradingListData(marketData)}
              pagination={false}
            />
          }
          Hot={
            <Components.CustomTable
              Data={Containers.TradingListData(marketData)}
              pagination={false}
            />
          }
          Loser={
            <Components.CustomTable
              Data={Containers.TradingListData(marketData)}
              pagination={false}
            />
          }
          HourChange={
            <Components.CustomTable
              Data={Containers.TradingListData(marketData)}
              pagination={false}
            />
          }
          new={
            <Components.CustomTable
              Data={Containers.TradingListData(marketData)}
              pagination={false}
            />
          }
        />
        Components.WEBSlider
      </div>
    </>
  );
};
