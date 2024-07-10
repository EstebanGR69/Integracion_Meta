import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(()=>{
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '831868978888221',
        cookie     : true,
        xfbml      : true,
        version    : 'v20.0'
      });
        
      FB.AppEvents.logPageView();   
        
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  },[])
  if(window.FB){
    console.log("SDK de facebook ",window.FB)
  }
  return (
    <>
    </>
  )
}

export default App
