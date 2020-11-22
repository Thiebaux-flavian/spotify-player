import './App.css';
import Home from './components/Home/home-dom-index.js';
import React from 'react';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import Ajax from './Ajax';
import VerticalMenu from "./components/Menu/VerticalMenu.js";

let log = 0;


function UserToken({ token }) {
  if (token != null){
    console.log(token);
 
    let ajax = new Ajax(token, 'UserInfo');
    console.log(ajax);
    log = true;
  return log, <Home remove="true" attribut="login"> Bienvenue </Home>
  }
    
  return <Home  attribut="login">Connectez-vous</Home>
  ;
}

function getAccessToken() {
  var searchParams = new URLSearchParams(document.location.href);
  return new URLSearchParams(document.location.href);
}

function QueryUrl() {
  let query = getAccessToken();
  return (
    <div>
      <div>
        <UserToken token={query.get('http://localhost:3000/callback/index.html#access_token')} />
      </div>
    </div>
  );
}


function App(props) {
  console.log(props);
  if(log == 0){
    return (
    <>
      <Router>
        <QueryUrl />
      </Router>
    </>
       
  );
  }
  if(log ==true){
    return(
      <>
      <VerticalMenu id="nav-vertical" />
      </>
    )
  };
  }
  

export default App;