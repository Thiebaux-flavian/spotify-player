import React from "react";
import $ from 'jquery';
import Ajax from '../../Ajax';
const { render } = require("@testing-library/react");

class ImgCurrentSong extends React.Component {
    constructor(props){
        super(props);
        this.id = this.props.id;
    }

    componentDidMount(){
        console.log('gj bro');
        let music = new Ajax(sessionStorage.getItem('token'), "current_img");
        
        let id = document.getElementById('current_img');
        
        music.nowPlaying();
        console.log('on change le HREF');
        console.log(sessionStorage.getItem('currently_img'));
        id.src=(sessionStorage.getItem('currently_img'));
                  
            
    }

    onMouseEnter(e){
        e.preventDefault();
      
    }
    
    onMouseOut(e){
        
       e.preventDefault();
    }

    render() { 
        return(

        <>
        </>

        
        );
        
    }
}

export default ImgCurrentSong;
  