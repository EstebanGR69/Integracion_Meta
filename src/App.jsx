import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  const initializeFacebookSDK = () => {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '831868978888221',
        xfbml      : true,
        version    : 'v20.0'
      });
      FB.AppEvents.logPageView();
      setIsSDKLoaded(true);
      console.log("Facebook SDK initialized");
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  };

  useEffect(() => {
    initializeFacebookSDK();
  }, []);
  if (window.FB) {
    console.log("SDK already loaded",window.FB);
    FB.getLoginStatus(function(response) {
      console.log("Respuesta ",response);
    });
    return;
  }
  return (
    <div className="App">
      <button onClick={initializeFacebookSDK}>
          Cargar Facebook SDK
      </button>
      {isSDKLoaded ? <p>Facebook SDK cargado</p> : <p>Cargando Facebook SDK...</p>}
    </div>
  );
}

export default App;
