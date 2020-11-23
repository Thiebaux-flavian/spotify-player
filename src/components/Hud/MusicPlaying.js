import React from "react";
import $ from 'jquery';

const { render } = require("@testing-library/react");

class MusicPlaying extends React.Component {
    constructor(props){
        super(props);
        this.id = this.props.id;
    }

    componentDidMount(){
        
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
        <aside style={{
            "position": "absolute",
            "left":"0%",
            "bottom":"0%",
            "height": "45%",
            "width":"220px",
            "paddingTop":"5px",
            "flexDirection":"column",
            "overflow": "hidden"}}>

            <figure style={{
                "top":"2px",
                "width": "300px",
                "height": "300px", 
                "position": "relative"
            }}>
                <img style={{
                    "width":"200px",
                    "height":"200px",
                    "borderRadius":"0px 9px 9px 0px",
                    "zIndex":"9",
                    "position":"relative"
                }}id="current_img" src="#" title="image de la musique"></img>
            </figure>
            <figcaption style={{
                    "position" : "absolute",
                    "bottom" : "0%",
                    "paddingLeft" : "0px",
                    "width":"220px",
                    "textAlign":"center",
                    "color":"white",
                    "background": "rgba(72,72,72,1)",
                    "borderRadius": "0px 20px 0px 0",
                    "borderRight": "5px solid rgba(200,80,80,1)",
                    "borderTop": "5px solid rgba(200,80,80,1)"
   
            }}>
            
<marquee direction="left" scrollamount="2" height="25" width="200"> {sessionStorage.getItem('currently_name')}  </marquee>    <br/>
                <strong style={{
                    "fontWeight":"800",
                    "fontSize":"18px"
                }}>{sessionStorage.getItem('currently_artist')}</strong>
            </figcaption>
            
        </aside>
        </>

        
        );
        
    }
}

export default MusicPlaying;
  