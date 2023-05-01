import { Components } from "../../components";
export const TradingListData = (marketData) => {
  return marketData.map((data, i) => ({
    key: i,
    icon: (
      <Components.Crypto_Icons pair={data.Market} name_coin={data.token_Name} />
    ),
    name: data.token_Name,
    tradingPair: data.Market,
    price: data.Price,
    change: data.Change,
    volume: data.volume,
  }));
};
