import React from 'react';
import './header.scss';
import icon from '../../assets/svg/userIconRound.svg'
import dots from '../../assets/svg/dot-menu.svg';
import edit from '../../assets/svg/edit-white.svg';

export default function Header () {

    return(
        <nav className="header">
            <div className='header__box'>
                <img src={dots}/>
                <h3 className="header__title">Microsoft Teams</h3>
            </div>
            <div>
                <img src={edit}/>
                <input className="header__search" alt="" placeholder="Search"></input>
            </div>
            <img src={icon} className="header__icon" alt=""></img>
        </nav>
    )
}