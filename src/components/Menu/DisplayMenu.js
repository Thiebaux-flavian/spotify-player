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
      
    }
    
    onMouseOut(e){
        
       e.preventDefault();
    }

    render() { 
        return(

        < >
        <div onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut} id="naviguation" style={{
            
            "display":"flex", 
            "flexDirection":"column",
            "position":"relative",
            "height": "100%",
            "alignItems":"center",
            'zIndex':'2'
            
            }}>
            <IconMenu iClass="fas fa-home" chemin="patate" text="HOME"/>
            <IconMenu iClass="fas fa-compact-disc" chemin="patate" text="BROWSE"/>
            <IconMenu iClass="fas fa-podcast" chemin="patate" text="RADIO"/>
        </div>
        
        </>

        
        );
        
    }
}

export default DisplayMenu;
  