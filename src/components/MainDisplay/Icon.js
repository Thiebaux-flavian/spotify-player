import React from "react";
import $ from 'jquery';
const { render } = require("@testing-library/react");

class Icon extends React.Component {
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
        <i class={this.props.etat}/>
        
        </>

        
        );
        
    }
}

export default Icon;
  