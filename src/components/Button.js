//import React from 'react';
import Proptypes from "prop-types"

const Button = ({color, text, onClick}) => {
    //const onclick= () =>{
    //    console.log(text, "was clicked")
    //}
    return (
        <button 
            onClick = {onClick}
            style= {{ backgroundColor: color}} 
            className="btn"> 
            
            {text} 

        </button>
  );
}

Button.defaultProps = {
    color: "steelblue",
    text : "Submit"
}

Button.propTypes = {
    text: Proptypes.string,
    color: Proptypes.string,
    onClick : Proptypes.func 
}
export default Button;
