import React from "react";
import $ from 'jquery';
import DisplayMenu from "./DisplayMenu.js";
import IconMenu from "./IconMenu.js";

const { render } = require("@testing-library/react");

class VerticalMenu extends React.Component {
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
        <nav onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut} id={this.props.id} style={{
            "position": "absolute",
            "left":"0%",
            "top":"15%",
            "height": "40%",
            "width":"auto",
            "flexDirection":"column",
            "overflow": "hidden",
           "alignItems": "center",
            "textAlign": "center"
        }}>
            <DisplayMenu >
            </DisplayMenu>
        </nav>
        
        </>

        
        );
        
    }
}

export default VerticalMenu;
  