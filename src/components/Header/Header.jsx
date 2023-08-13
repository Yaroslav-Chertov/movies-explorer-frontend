import { HeaderAuth } from '../HeaderAuth/HeaderAuth';
import { HeaderMov } from '../HeaderMov/HeaderMov';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import { Logo } from '../elements/Logo/Logo';

export const Header = ({ isLoggedIn, color }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={`header ${color}`}>
            <nav className='header__nav'>
                <Logo position={'header__logo'} />
                {!isLoggedIn ? (<HeaderAuth />) : (<HeaderMov isOpen={isOpen} setIsOpen={setIsOpen} />)}
            </nav>

            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};