// STATELESS Class Component

import React from 'react';

import NavBarItem from './NavBarItem';

import react_logo from '../assets/react.svg';
import github_logo from '../assets/github.svg';
import settings_logo from '../assets/settings.svg';

import '../styles/NavBar.css';

/*
 * - Class always extends React.Component
 * - Props is available inside the class as a property (this.props)
 */
class NavBar extends React.Component{
    render() {
        return(
            <nav className="navbar">
                <ul className="navbar-list">
                    <NavBarItem icon={react_logo} iconAlt="React Logo" title='React' link="https://reactjs.org/docs/getting-started.html"/>
                    <NavBarItem icon={github_logo} iconAlt="Angular Logo" title='GitHub' link="https://github.com/Infinituum17/ReactApp"/>
                    <NavBarItem icon={settings_logo} iconAlt="Settings Logo" title='Settings' link="#"/>
                </ul>
            </nav>
        );
    }
}

export default NavBar;