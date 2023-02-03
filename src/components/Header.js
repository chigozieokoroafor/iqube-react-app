//import React from 'react';
import PropTypes from "prop-types"
import Button from "./Button"

//const Header = (props) => { line 5 and line 6 do the same thing but line 6 requires line 19 to work
const Header = ({title}) => {
    const onclick = () => {
        console.log("clicked")
    }
    return (
        <header className='header'>
        <h1>{title}</h1> 
        <Button color="green" text="click me" onClick={onclick}/>
        <Button />
        
        </header>
    );
}

Header.defaultProps = {
    title: "iQube TT"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
