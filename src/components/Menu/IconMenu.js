import React from "react";
import $ from 'jquery';

class IconMenu extends React.Component {
    constructor(props){
        super(props);
        this.iClass = this.props.iClass;
        this.text= this.props.text;
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
        <div  id="iconRender" onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut}  style={{
            "display": "flex",
            "flex":"1",
            "alignItems":"center",
            "width":"100%"
            }}>
                <a onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut}  className={this.iClass} style={{
                "fontSize": "24px",
                "marginLeft":"10px",
                "textDecoration":"none"
                }}>
                </a>
                <p onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut} style={{
                    "position":"absolute",
                    "left":"50px",
                    "textAlign":"center",
                    "fontWeight":"800",
                    "fontSize":"15px",
                    "marginBottom":"5px",
                    
                            }}>{this.text}</p>
        </div>
        </>

        
        );
        
    }
}

export default IconMenu;
  