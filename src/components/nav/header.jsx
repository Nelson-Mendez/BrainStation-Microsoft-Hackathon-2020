import React from 'react';
import './header.scss';
import icon from '../../assets/svg/icon.svg'

export default function Header () {

    return(
        <nav className="header">
            <h3 className="header__title">Microsoft Teams</h3>
            <input className="header__search" alt="" placeholder="Search"></input>
            <img src={icon} className="header__icon" alt=""></img>
        </nav>
    )
}