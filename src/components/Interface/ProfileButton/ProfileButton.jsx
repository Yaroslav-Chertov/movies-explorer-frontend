import userIcon from '../../../images/icon_profile.svg';
import { Link } from 'react-router-dom';
export const ProfileButton = ({ position }) => {
    return (
        <Link
            className={`profile-link hover-link ${position}`}
            to='/profile'
            aria-label='Войти в профиль'
        >
            Аккаунт
            <div className='profile-link__box'>
                <img
                    className='profile-link__image'
                    src={userIcon}
                    alt='Пользователь'
                />
            </div>
        </Link>
    );
};