import React from "react";
import $ from 'jquery';

class IconMenu extends React.Component {
    constructor(props){
        super(props);
        this.iClass = this.props.iClass;
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
        <div  onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut}  style={{
            "display": "flex",
            "flex":"1",
            "alignItems":"center",
            "background":"red",
            "width":"100%"
            }}>
                <i className={this.iClass} style={{
                "fontSize": "24px",
                "marginLeft":"10px"
                }}>
                </i>
                <p style={{
                    "position":"absolute",
                    "left":"52px"
                            }}>coucou</p>
        </div>
        </>

        
        );
        
    }
}

export default IconMenu;
  