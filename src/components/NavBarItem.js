import React from 'react';

import '../styles/NavBar.css';

export default function NavBarItem(props) {
    return (
        <a href="/#" className="navbar-item">
            <img src={props.icon} alt={props.iconAlt}></img>
            <div className="description">{props.title}</div>
        </a>
    );
}