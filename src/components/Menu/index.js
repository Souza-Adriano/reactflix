import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from '../Template/ButtonLink';

const Menu = () => (
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="LOGO" />
        </a>

        <ButtonLink className="ButtonLink" href="/">
            Novo Video
        </ButtonLink>
    </nav>
);

export default Menu;