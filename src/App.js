import './App.css';
import Home from './components/Home/home-dom-index.js';
import React from 'react';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import Ajax from './Ajax';
import VerticalMenu from "./components/Menu/VerticalMenu.js";
import MusicPlaying from "./components/Hud/MusicPlaying.js";
import ImgCurrentSong from "./components/Hud/ImgCurrentSong.js";
import MainDisplay from "./components/MainDisplay/MainDisplay.js";
let log = 0;
let dataToken = null;

function UserToken({ token }) {
  if (token != null){
    sessionStorage.setItem("token", token);
 
    dataToken = token;
    console.log(token);
 
    let ajax = new Ajax(token, 'UserInfo');
    console.log(ajax);
    log = true;
    console.log(sessionStorage.getItem("name"));
  return log, <Home remove="true" attribut="login"> Bienvenue {sessionStorage.getItem("name")}</Home>
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
  
  if(log == 0){
    return (
    <>
    <div id="body">
      <Router>
        <QueryUrl />
      </Router>
    </div>
    </>

       
  );
  }
  if(log ==true){
    console.log(sessionStorage.getItem("token"));        
    return(
      <>
      <VerticalMenu id="nav-vertical" />
      
      
        <MusicPlaying />
        <ImgCurrentSong id="current_img"/>
        <MainDisplay etat="fas fa-home" /> 
      </>
    )
  
    
  };
  
}
  

export default App;