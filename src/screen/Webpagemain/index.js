import { Button, Tabs } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "antd-mobile";
import {
  LineChartOutlined,
  FireOutlined,
  FallOutlined,
  RiseOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { Staricons } from "../../assets/images/trading/start";
import { Components } from "../../components";

import "./Webpagemain.css";

const { TabPane } = Tabs;
export const Webpagemain = () => {
  const { t } = useTranslation();
  const [Login, setLogin] = useState(true);
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  //sessionStorage.setItem("email", token);
  //sessionStorage.setItem("password", token);

  const Com = (prams) => {
    return (
      <>
        <div
          className="icons-table"
          onClick={() => navigate(`/trade/symbol=${prams.pair}`)}
        >
          <div>
            <Staricons />
          </div>
          <div>
            <img
              style={{ height: "25px" }}
              src={require(`../../../node_modules/cryptocurrency-icons/128/color/${prams.pair
                .split("/")[0]
                .toLocaleLowerCase()}.png`)}
            />
          </div>
          <div className="token-state-table">
            <div className="pair">{prams.pair}</div>
            <div className="name-coin">{prams.name_coin}</div>
          </div>
        </div>
      </>
    );
  };

  const data = [
    {
      key: "1",
      icon: <Com pair="BTC/USD" name_coin="Bitcoin" />,
      name: "Bitcoin",
      tradingPair: "BTC/USD",
      price: 54678.5,
      change: 0.0142,
      volume: 784325,
    },
    {
      key: "2",
      icon: <Com pair="ETH/USD" name_coin="Ethereum" />,
      name: "Ethereum",
      tradingPair: "ETH/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "3",
      icon: <Com pair="TRX/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "4",
      icon: <Com pair="SOL/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "5",
      icon: <Com pair="LTC/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "6",
      icon: <Com pair="BCH/USD" name_coin="Ethereum" />,
      name: "0000",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "7",
      icon: <Com pair="XRP/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "8",
      icon: <Com pair="BNB/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "1",
      icon: <Com pair="BTC/USD" name_coin="Bitcoin" />,
      name: "Bitcoin",
      tradingPair: "BTC/USD",
      price: 54678.5,
      change: 0.0142,
      volume: 784325,
    },
    {
      key: "2",
      icon: <Com pair="ETH/USD" name_coin="Ethereum" />,
      name: "Ethereum",
      tradingPair: "ETH/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "3",
      icon: <Com pair="TRX/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "4",
      icon: <Com pair="SOL/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "5",
      icon: <Com pair="LTC/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "6",
      icon: <Com pair="BCH/USD" name_coin="Ethereum" />,
      name: "0000",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "7",
      icon: <Com pair="XRP/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    {
      key: "8",
      icon: <Com pair="BNB/USD" name_coin="Ethereum" />,
      name: "Suriname Copa",
      tradingPair: "SDR/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    // add more data objects here
  ];

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
              Data={data.slice(0, 8)}
              pagination={false}
            />
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
