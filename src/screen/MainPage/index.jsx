import { AppRoute } from "../../router";
import { Suspense } from "react";
import { Components } from "../../components";
import { Spin } from "antd";
export const MainPage = () => {
  return (
    <Suspense
      children={
        <div className="Suspense-s">
          <Spin style={{ position: "absolute", top: "50%", left: "49%" }} />
        </div>
      }
    >
      <>
        <Components.WEBHEADER />
        <AppRoute />
      </>
    </Suspense>
  );
};
