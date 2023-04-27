import Slider from "react-slick";

export const WEBSlider =()=>{
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
   
  };
  
    return(
        <Slider {...settings}>
      <div className="banner-1">
       
       <div  className="all-banner-limit">
           <img src="https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-04-15/d7353e4b-f6bb-4ec4-8328-1a69af2166ff.jpg" />
           <img src="https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-01-20/2ad3fd8c-617e-4169-ac95-102cfc7213a7.jpg" />
           <img src="https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2022-12-21/7b94aad2-f7e1-4d4e-874a-e89989968ffd.jpg" />
           <img src="https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2022-12-21/7b94aad2-f7e1-4d4e-874a-e89989968ffd.jpg" />
       </div>
       
      </div>
      <div className="banner-1">
          
          <div className="all-banner-limit">
               <img src="https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-01-20/2ad3fd8c-617e-4169-ac95-102cfc7213a7.jpg" />
               <img src="https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-01-20/2ad3fd8c-617e-4169-ac95-102cfc7213a7.jpg" />
               <img src="https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2022-12-21/7b94aad2-f7e1-4d4e-874a-e89989968ffd.jpg" />
               <img src="https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2022-12-21/7b94aad2-f7e1-4d4e-874a-e89989968ffd.jpg" />
          </div>
       
           
      </div>
      
    </Slider>
    )
}