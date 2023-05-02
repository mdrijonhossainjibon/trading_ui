import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./createStore";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";
import "./style.css";
//import './assets/bootstrap/css/bootstrap.min.css';
//import 'antd/dist/';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { WEBDESTOP } from "./screen";

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <WEBDESTOP.MainPage />
      </I18nextProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
