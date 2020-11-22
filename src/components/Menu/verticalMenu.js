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
        <nav id={this.props.id} style={{
            "position": "absolute",
            "left":"0%",
            "top":"20%",
            "height": "40%",
            "width":"auto",
            "flexDirection":"column",
            "background":"grey",
            "overflow": "hidden",
            "borderRadius": "0 20px 20px 0",
            "alignItems": "center",
            "textAlign": "center"
        }}>
            <DisplayMenu>
            </DisplayMenu>
        </nav>
        
        </>

        
        );
        
    }
}

export default VerticalMenu;
  