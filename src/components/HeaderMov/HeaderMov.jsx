import { NavLink } from 'react-router-dom';
import { BurgerMenu } from '../Interface/BurgerMenu/BurgerMenu';
import { ProfileButton } from '../Interface/ProfileButton/ProfileButton';

export const HeaderMov = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <nav className='header__movie-links'>
                <NavLink className='header__movie-link hover-link' to='/movies'>
                    Фильмы
                </NavLink>

                <NavLink className='header__movie-link hover-link' to='/saved-movies'>
                    Сохранённые фильмы
                </NavLink>
            </nav>

            <ProfileButton />

            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};