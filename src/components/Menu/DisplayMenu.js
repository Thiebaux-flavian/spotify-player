import React from "react";
import $ from 'jquery';

import IconMenu from "./IconMenu.js";
const { render } = require("@testing-library/react");

class DisplayMenu extends React.Component {
    constructor(props){
        super(props);
        this.id = this.props.id;
    }

    componentDidMount(){
        
        
    }

    onMouseEnter(e){
        e.preventDefault();
        $('#naviguation').css('width','100px');
    }
    
    onMouseOut(e){
        
       e.preventDefault();
       $('#naviguation').css('width','50px');
    }

    render() { 
        return(

        <>
        <div onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut} id="naviguation" style={{
            "width": "50px", 
            "display":"flex", 
            "flexDirection":"column",
            "position":"relative",
            "height": "100%",
            "alignItems":"center",
            'zIndex':'2'
            
            }}>
            <IconMenu iClass="fas fa-home" chemin="patate" />
            <IconMenu iClass="fas fa-compact-disc" chemin="patate" />
            <IconMenu iClass="fas fa-podcast" chemin="patate" />
        </div>
        
        </>

        
        );
        
    }
}

export default DisplayMenu;
  