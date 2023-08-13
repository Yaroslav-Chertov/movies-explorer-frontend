import { useState } from 'react';

export const MoviesCard = ({ title, duration, image, link }) => {
    const [savedMovie] = useState(true);
    const isLiked = true;

    return (
        <li className='movies-cards__item'>
            <div className='movies-cards__head'>
                <div className='movies-cards__info'>
                    <h3 className='movies-cards__title'>{title}</h3>
                </div>
                <p className='movies-cards__duration'>{duration}</p>
            </div>
            <a
                className='movies-cards__link hover-link'
                target='_blank'
                rel='noreferrer'
                href={link}
            >
                <img
                    className='movies-cards__image'
                    src={image}
                    alt='Фото фильма'
                />
            </a>
            <button
                className={`movies-cards__favourite ${isLiked && 'movies-cards__favourite_active'
                    } ${savedMovie && 'movies-cards__favourite_saved'} hover-link`}
                aria-label='Добавить фильм'
            >
                Сохранить
            </button>
        </li>
    );
};