import { useNavigate } from "react-router-dom";
import { Staricons } from "../../assets/images/trading/start";
export const Crypto_Icons = (prams) => {
  const navigate = useNavigate();
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
