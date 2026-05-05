import React from "react";

function Header (){
    return(
        <header>
           <h1 className="header">Personal Project Showcase App</h1> 
           <nav>
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#contact">Contact</a>
           </nav>
        </header>
    );
}
export default Header;