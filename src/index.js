
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { Store } from './store';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import './style.css';
//import './assets/bootstrap/css/bootstrap.min.css';
//import 'antd/dist/';
//import 'slick-carousel/slick/slick-theme.css';
//import 'slick-carousel/slick/slick.css';


import { WEBDESTOP } from './screen';


//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(<BrowserRouter><WEBDESTOP.MainPage/></BrowserRouter>,document.getElementById('root'))






