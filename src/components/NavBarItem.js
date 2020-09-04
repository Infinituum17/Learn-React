import React from 'react';

import '../styles/NavBar.css';

/*
 * Function as Component
 * 
 * - Props is a parameter of the Functional Component
 */
function NavBarItem(props) {
    return (
        <a href={props.link} className="navbar-item">
            <img src={props.icon} alt={props.iconAlt}></img>
            <div className="description">{props.title}</div>
        </a>
    );
}

export default NavBarItem;