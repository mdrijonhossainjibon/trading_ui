import { Button } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "antd-mobile";
import { Table } from "antd";
import { BTC } from "react-cryptocoins";
import numeral from "numeral";
export const Webpagemain = () => {
  const { t } = useTranslation();
  const [Login, setLogin] = useState(true);
  const navigate = useNavigate();
  //sessionStorage.setItem("email", token);
  //sessionStorage.setItem("password", token);

  const Com = () => {
    return (
      <>
        <div>
          <div>
            <img src={"../../assets/images/trading/star.svg"} />
          </div>
          <div>
            <img
              style={{ height: "25px" }}
              src={require("../../../node_modules/cryptocurrency-icons/128/color/sol.png")}
            />
          </div>
          <div>USD/BTC</div>
          <div>United States</div>
        </div>
      </>
    );
  };

  const data = [
    {
      key: "1",
      icon: <Com />,
      name: "Bitcoin",
      tradingPair: "BTC/USD",
      price: 54678.5,
      change: 0.0142,
      volume: 784325,
    },
    {
      key: "2",
      icon: <Com />,
      name: "Ethereum",
      tradingPair: "ETH/USD",
      price: 3425.12,
      change: -0.0091,
      volume: 235678,
    },
    // add more data objects here
  ];

  const columns = [
    {
      title: "Trading Pair",
      dataIndex: "icon",
      key: "icon",
    },
    {
      title: "Price",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Change",
      dataIndex: "tradingPair",
      key: "tradingPair",
    },
    {
      title: "24h High",
      dataIndex: "price",
      key: "price",
      render: (price) => numeral(price).format("$0,0.00"),
    },
    {
      title: "24h Low",
      dataIndex: "change",
      key: "change",
      render: (change) => {
        const formattedChange = numeral(change).format("0.00%");
        return (
          <span style={{ color: change >= 0 ? "green" : "red" }}>
            {formattedChange}
          </span>
        );
      },
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
      render: (volume) => numeral(volume).format("0,0"),
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: (volume) => numeral(volume).format("0,0"),
    },
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
        Components.WEBSlider
        <div className="banner-not">
          <div className="news">
            <SoundOutlined />
            <div style={{ marginLeft: "15px", fontSize: "14px" }}>TEXTTT</div>
          </div>
        </div>
        Components.MARKETTABLE
        <Table dataSource={data} columns={columns} />
      </div>
    </>
  );
};
