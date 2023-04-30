import { Table, Button } from "antd";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

export const CustomTable = (prams) => {
  const navigate = useNavigate();

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
      dataIndex: "Action",
      key: "Action",
      render: (pair) => {
        return (
          <>
            <Button
              style={{ marginRight: "10px", width: "90px" }}
              className="btn-1-trade"
              onClick={() => navigate("/trade/symbol=AA")}
            >
              More
            </Button>
            <Button
              className="btn-2-trade"
              style={{ marginLeft: "10px" }}
              onClick={() => navigate("/trade/symbol=AA")}
            >
              Trade
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={prams.Data}
        columns={columns}
        pagination={prams.pagination}
      />
    </>
  );
};
