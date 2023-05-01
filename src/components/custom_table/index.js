import { Table, Button } from "antd";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Containers } from "../../containers";
export const CustomTable = (params) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const columns = [
    {
      title: "Trading Pair",
      dataIndex: "icon",
      key: "icon",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => {
        return (
          <>
            <div>
              <div>{price}</div>
              <div>{numeral(price).format("$0,0.00")}</div>
            </div>
          </>
        );
      },
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Change",
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
      sorter: (a, b) => a.change - b.change,
    },
    {
      title: "24h High",
      dataIndex: "high",
      key: "high",
      render: (high) => numeral(high).format("$0,0.00"),
    },
    {
      title: "24h Low",
      dataIndex: "low",
      key: "low",
      render: (low) => numeral(low).format("$0,0.00"),
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
      render: (volume) => Containers.MillifyNumber(volume),
      sorter: (a, b) => a.volume - b.volume,
    },
    {
      dataIndex: "Action",
      key: "Action",
      render: (text, record) => {
        const tradingPair = record.tradingPair.split("/");
        return (
          <>
            <Button
              style={{ marginRight: "10px", width: "90px" }}
              className="btn-1-trade"
              onClick={() =>
                navigate(`/trade/symbol=${tradingPair[0]}_${tradingPair[1]}`)
              }
            >
              {t("details")}
            </Button>
            <Button
              className="btn-2-trade"
              style={{ marginLeft: "10px" }}
              onClick={() =>
                navigate(`/trade/symbol=${tradingPair[0]}_${tradingPair[1]}`)
              }
            >
              {t("Trading")}
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={params.Data}
        columns={columns}
        pagination={params.pagination}
        showSorterTooltip={false}
      />
    </>
  );
};
