export const API = async({type , method, body})=>{
    try{
          const response = await fetch('https://codesandbox.io/p/'+type,{
          method ,
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(body)
      })
    const data = await response.json()
    return data;
    } catch(e){
       return console.error(e)
    }
}