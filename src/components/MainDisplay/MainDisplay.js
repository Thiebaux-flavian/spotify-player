import React from "react";
import $ from 'jquery';
import Icon from './Icon.js';
const { render } = require("@testing-library/react");

class MainDisplay extends React.Component {
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
        <div id="main-display">
        <h3>{sessionStorage.getItem('name')}, just sit back and relax</h3> 
            <Icon etat={this.props.etat} /> 
        
        
        </div>
        
        </>

        
        );
        
    }
}

export default MainDisplay;
  