import './style.css';
const windowalartConterner = (props)=>{

    setTimeout(() => {
        document.querySelector('.loading-circle').classList.add('show')
    }, 150);
    setTimeout(() => {
        document.querySelector('.loading-circle').classList.remove('show')
    }, 4000);
    return(
        <div class="loading-circle">
        <div class="circle"></div>
      </div>
    )
    
}


const error =({Timeout,position,title,msg})=>{


  setTimeout(() => {
    

    let message = document.getElementById('message')


    setTimeout(() => {
    
        message.classList.add('show')
     }, 150);
     
     
     setTimeout(() => {
         message.classList.remove('show')
     },Timeout || 3000 );
  }, 100);


    return(
        <div style={position === 'center' ?   { top : '50%'} : {top : `${position}%`}} id="message">
		<h2  style={{textAlign : 'center'}}>{title || 'blank'}</h2>
		<p style={  { paddingLeft : '69px',
    paddingTop: '-46px',
    marginTop: '-15px',
    paddingRight : '5px'
    
}}>{msg || 'This is an example message.'}</p>
	</div>
    )


    }


 const windowalart = { error }





export const Alerts={ windowalartConterner,windowalart }