//import "antd/dist/antd.min.css";
import { Button, Input, Carousel,notification ,Table  } from "antd";
import { DownloadOutlined,GlobalOutlined,DownOutlined,SoundOutlined} from '@ant-design/icons'
import "./LoginScreen.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Manuarr = ['Buy Credit Card','MARKET','Trading','Earn','Airdrop'];

import { Components } from '../../components/'


const dataSource = [
  {
    key: '1',
    market: 'Binance',
    coinLogo: 'https://www.binance.com/favicon.ico',
    pair: 'BTC/USDT',
  },
  {
    key: '2',
    market: 'Coinbase',
    coinLogo: 'https://www.coinbase.com/favicon.ico',
    pair: 'ETH/USD',
  },
  {
    key: '3',
    market: 'Kraken',
    coinLogo: 'https://www.kraken.com/favicon.ico',
    pair: 'LTC/EUR',
  },
];

const columns = [
  {
    title: 'Market',
    dataIndex: 'market',
    key: 'market',
  },
  {
    title: 'Coins Logo',
    dataIndex: 'coinLogo',
    key: 'coinLogo',
    render: (logo) => <img src={logo} alt="coin logo" />,
  },
  {
    title: 'Pair',
    dataIndex: 'pair',
    key: 'pair',
  },
];

export const LogInScreen = () => {
 

    return(
        <>
        <div className="header">
           <div className="header-logo-div">
               LOGO
           </div>
           <ul className="header-ul">
              
               <li>Buy Crypto  <DownOutlined /></li>
               <li>MARKET </li>
               <li>Trading  <DownOutlined /></li>
               <li>Earn <DownOutlined /></li>
               
           </ul>
           <div className="right-login--reg">
               <div className="Login">Login</div>
               <div className="Register">Register</div>
               <DownloadOutlined className="d-icons"/>
              <GlobalOutlined  className="g-icons"/>
           </div>
           <div className="popup">wdrw</div>
           
        </div>
        
        <div className="home-page">
            <div  className="loading-page-title">
                <div className="ex-name"> DEMO Global </div>
                 <div className="ex-name1">The World's Leading Blockchain Digital Asset Trading Platform</div>
                 <div className="ex-name2"> Hassle-free Trading among BTC, ETH, USDT and Other Cryptos</div>
            </div>
           
           
          
           
       
       <div className="loading-page-rg">
           <Button className="login-btn" name="Login" title="Login">Login</Button>
       <Button className="rg-btn" name="Login" title="Register">Register</Button>
       </div>
       
      
    <Components.WEBSlider/>
       
      <div className="banner-not">
          <div className="news">  <SoundOutlined />  <div style={ { marginLeft : '15px',fontSize : '14px' } }>TEXTTT</div> </div>
      </div>
       
      <Table dataSource={dataSource} columns={columns} />
        </div>
        </>
    )
};
