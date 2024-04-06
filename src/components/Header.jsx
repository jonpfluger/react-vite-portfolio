import React from 'react';
import Nav from '../components/Nav'
import logo from '../assets/images/new-logos/JPDevWebLogo-02.png'

function Header() {
    return (
        <header id="header">
            <img id="logo" src={logo} alt="Jon Pfluger's logo" />
            <Nav />
        </header>
    )
}

export default Header