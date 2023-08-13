import React from 'react';

export const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__name'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className='footer__bot'>
                <p className='footer__year'>© 2023</p>
                <div className='footer__links'>
                    <a
                        className='footer__link hover-link'
                        href='https://practicum.yandex.ru/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        Яндекс.Практикум
                    </a>
                    <a
                        className='footer__link hover-link'
                        rel='noreferrer'
                        href='https://github.com/Yaroslav-Chertov'
                        target='_blank'
                    >
                        Github
                    </a>
                </div>
            </div>
        </footer>
    );
};