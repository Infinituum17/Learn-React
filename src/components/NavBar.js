import React from 'react';
import NavBarItem from './NavBarItem';
import react_logo from '../assets/react.svg';
import angular_logo from '../assets/angular.svg';
import settings_logo from '../assets/settings.svg';

import '../styles/NavBar.css';

export default function NavBar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <NavBarItem icon={react_logo} iconAlt="React Logo" title='React' />
                <NavBarItem icon={angular_logo} iconAlt="Angular Logo" title='Angular' />
                <NavBarItem icon={settings_logo} iconAlt="Settings Logo" title='Settings' />
            </ul>
        </nav>
    );
}