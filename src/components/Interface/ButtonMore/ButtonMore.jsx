import React from 'react';

export const ButtonMore = ({ text }) => {
    return (
        <button
            className='movies-cards__more hover-link'
            aria-label='Добавить еще фильмов'
        >
            {text}
        </button>
    );
};