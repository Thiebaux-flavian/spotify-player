import React from "react"
import $ from 'jquery';
import App from '../../App.js';

const { render } = require("@testing-library/react");

class Home extends React.Component {
    constructor(props){
        super(props);
        this.className = "btn btn-primary btn-login " + this.props.attribut;
        this.remove = this.props.remove;
    }

    componentDidMount(){
        let headphoneWidth = document.getElementById('headphone').offsetWidth;
        if(this.remove == 'true'){  
            setTimeout(() => {
                $('.articleRemove').addClass('switch');  
                $('#connexion').addClass('buttonRemoveAnimation');

                }, 700);
                setTimeout(() => {
                    $('#connexion').addClass('switch');         
                    $('#headphone').css('filter', 'blur(1px)'); 
                    let sectionRemove = document.querySelector('section');
                    sectionRemove.remove(sectionRemove);   //Clean la section Home
                      
                   
                    render(
                    <App/> 
                );
                }, 1100);
            }
        
    }

    onMouseEnter(e){
        e.preventDefault();
        let deg = 90;
        let timerIn = window.setInterval(function(){
            document.getElementById('connexion').style.background = "linear-gradient("+deg+"deg, rgba(226,217,217,1) 0%, rgba(200,80,80,1) 70%, rgba(200,80,80,1) 100%)";
            deg = deg+10;
            if( deg >= 270){
                clearInterval(timerIn);
            }
        },35);
    }
    
    onMouseOut(e){
        
       e.preventDefault();
        let degOut = 270;
        let timerOut = window.setInterval(function(){
            document.getElementById('connexion').style.background = "linear-gradient("+degOut+"deg, rgba(226,217,217,1) 0%, rgba(200,80,80,1) 70%, rgba(200,80,80,1) 100%)";
            degOut = degOut-10;
            if( degOut <= 90){
                clearInterval(timerOut);
            }
        },35);
    }

    render() { 
        if(this.remove != "ok"){
        return(  
        <>  
        <aside id="home-aside" className="container-fluid">
        <p className='p-left'>Listen your music</p> <p className='p-right'>where you want</p>
        <figure>
          <img id="headphone" src={process.env.PUBLIC_URL + '/img/headphone-clipart2.png'} /> 
        </figure>
       
        <div className={this.remove ? '' : ''}id="login">       
        <a href="https://accounts.spotify.com/authorize?client_id=05769ee72ff44c248a9c4abf0617ee68&redirect_uri=http://localhost:3000/callback/index.html&scope=user-read-private%20user-read-email%20user-read-currently-playing&response_type=token&state=123" id="connexion" className={this.className} onMouseEnter={this.onMouseEnter}onMouseOut={this.onMouseOut} onClick={this.onMouseClick}>{this.props.children}</a>
        
        </div>
        
      
          </aside>
          <section className="home-app ">
          <article className={this.remove ? 'swing-out-left-bck col-md-6 articleRemove ' : 'col-md-6'}>

          </article>
          <article className={this.remove ? 'swing-out-right-bck col-md-6 articleRemove ' : 'col-md-6'} >
          </article>
          </section>  
      </>

        
        );
        }
        
    }
}

export default Home;
  