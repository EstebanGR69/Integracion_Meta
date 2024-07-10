import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  const facebookLoginHandler=(response)=>{
    console.log("Respuesta ", response)
  }

  useEffect(()=>{
    // Definir la inicialización de Facebook
    window.fbAsyncInit = function() {
        FB.init({
          appId: '831868978888221',
          cookie: true,
          xfbml: true,
          version: 'v20.0'
        });
  
        FB.AppEvents.logPageView();
      };
      // Cargar el SDK de Facebook
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

    },[])

  var IniciarSesion=()=>{
    /*Condicional para validar que existe el SDK de facebook*/
    if(!window.FB){
      console.log("NO SE CARGÓ EL SDK DE FACEBOOK")
    }else{
      console.log("SÍ SE CARGÓ EL SDK DE FACEBOOK")

      console.log("SDK de facebook ",window.FB)

      /* window.FB.login(facebookLoginHandler,{scope:'public_profile'}) */
      /*Validar respuesta*/
      window.FB.getLoginStatus(response=>{
        console.log("Respuesta ",response)
          /*En caso de conexión exitosa, se manejará la respuesta*/
/*           if(response.status=="connected"){
              window.FB.login(facebookLoginHandler)
          } */
          /*En este caso hubo un problema con la app de meta*/
/*           if(response.status=="unknown"){
              FB.login(facebookLoginHandler)
              console.log("Se cargó el SDK correctamente, pero hubo un error con la APP de meta")
          }else {
              console.log(response,"Usuario no autorizado")
              window.FB.login(facebookLoginHandler)
            } */
      })
        }
      }
  return (
    <div className="App">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center" onClick={IniciarSesion}>
            Conectar con facebook
      </button>
      
    </div>
  );
}

export default App;
