import { Button, Tabs } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "antd-mobile";

import { Components } from "../../components";

import "./Webpagemain.css";

export const Webpagemain = () => {
  const { t } = useTranslation();
  const [Login, setLogin] = useState(true);
  const [activeTab, setActiveTab] = useState("1");
  const [TradingListData, setTradingListData] = useState([]);
  const navigate = useNavigate();

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  useEffect(async () => {
    const datas = await fetch(
      "https://raw.githubusercontent.com/mdrijonhossainjibon/trading_ui/main/public/data/market.json"
    );
    const TradingData = await datas.json();
    const setTradingListDatas = [];
    TradingData.map((data, i) => {
      setTradingListDatas.push({
        key: i,
        icon: (
          <Components.Crypto_Icons
            pair={data.Market}
            name_coin={data.token_Name}
          />
        ),
        name: "0.00001",
        tradingPair: "BTC/USD",
        price: 54678.5,
        change: 0.0142,
        volume: 784325,
      });
    });
    setTradingListData(setTradingListDatas);
  }, []);

  //sessionStorage.setItem("email", token);
  //sessionStorage.setItem("password", token);

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
            <Components.CustomTable Data={TradingListData} pagination={false} />
          }
          Hot={<Components.CustomTable Data={[]} pagination={false} />}
          Loser={<Components.CustomTable Data={[]} pagination={false} />}
          HourChange={<Components.CustomTable Data={[]} pagination={false} />}
          new={<Components.CustomTable Data={[]} pagination={false} />}
        />
        Components.WEBSlider
      </div>
    </>
  );
};
