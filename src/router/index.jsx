import { Routes, Route } from "react-router-dom";
import { WEBDESTOP } from "../screen";

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WEBDESTOP.Webpagemain />} />
        <Route path="/auth/login" element={<WEBDESTOP.LogInScreen />} />
      </Routes>
    </>
  );
};
