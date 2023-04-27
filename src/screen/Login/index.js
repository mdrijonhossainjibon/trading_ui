//import "antd/dist/antd.min.css";
import { Button, Input } from "antd";
import { DownloadOutlined,GlobalOutlined,DownOutlined} from '@ant-design/icons'
import "./LoginScreen.css";
const Manuarr = ['Buy Credit Card','MARKET','Trading','Earn','Airdrop']
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
           <div className="ex-name"> Hotcoin Global </div>
           <div className="ex-name1">The World's Leading Blockchain Digital Asset Trading Platform</div>
           <div className="ex-name2"> Hassle-free Trading among BTC, ETH, USDT and Other Cryptos</div>
       
       
       
        </div>
        </>
    )
};
