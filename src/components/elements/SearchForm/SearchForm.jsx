import React from 'react';
import findPic from '../../../images/find.svg';
import { SwitchToggle } from '../../Interface/SwitchToggle/SwitchToggle';
import { SwitchToggleMobile } from '../../Interface/SwitchToggle/SwitchToggleMobile/SwitchToggleMobile';

export const SearchForm = () => {
    return (
        <div className='search'>
            <div className='container container_movies-mobile'>
                <div className='search__wrapper'>
                    <form className='search__form' action='#'>
                        <div className='search__inner'>
                            <input
                                className='search__input'
                                type='text'
                                required
                                placeholder='Фильм'
                                minLength={2}
                                maxLength={90}
                            />
                            <button
                                className='search__button hover-link'
                                aria-label='Поиск фильма'
                                type='submit'
                            >
                                <img className='search__arrow' src={findPic} alt='Стрелка' />
                            </button>

                        </div>
                        <SwitchToggle
                            name={'Короткометражки'}
                            position={'search__toggle'}
                        />
                        <SwitchToggleMobile name={'Короткометражки'} />
                    </form>
                </div>
            </div>
        </div>
    );
};