import { Button } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
export const Webpagemain = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="home-page">
        <div className="loading-page-title">
          <div className="ex-name">{t("ex-name")}</div>
          <div className="ex-name1">{t("welcome-text")}</div>
          <div className="ex-name2">{t("ex-name2")}</div>
        </div>
        <div className="loading-page-rg">
          <Button className="login-btn" name="Login" title="Login">
            {t("L")}
          </Button>
          <Button className="rg-btn" name="Login" title="Register">
            {t("R")}
          </Button>
        </div>
        Components.WEBSlider
        <div className="banner-not">
          <div className="news">
            <SoundOutlined />
            <div style={{ marginLeft: "15px", fontSize: "14px" }}>TEXTTT</div>
          </div>
        </div>
        d
      </div>
    </>
  );
};
