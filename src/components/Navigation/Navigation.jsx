import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <nav className='navigation'>
            <a className='navigation__link' href='#project'>
                О проекте
            </a>
            <a className='navigation__link' href='#techs'>
                Технологии
            </a>
            <a className='navigation__link' href='#about-me'>
                Студент
            </a>
        </nav>
    );
}

export default Navigation;