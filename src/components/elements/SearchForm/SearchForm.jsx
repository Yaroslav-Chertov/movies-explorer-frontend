import { useState } from 'react';

import findPic from '../../../images/find.svg';
import { SwitchToggle } from '../../Interface/SwitchToggle/SwitchToggle';
import { SwitchToggleMobile } from '../../Interface/SwitchToggle/SwitchToggleMobile/SwitchToggleMobile';

export const SearchForm = ({
    handleSearchMovies,
    inputSearchForm,
    setInputSearchForm,
    checkboxValue,
    setCheckboxValue,
    filterSavedMovies,
}) => {
    const [inputText, seInputText] = useState('');
    const [checkboxShortMovies, setCheckboxShortMovies] = useState(false);
    const isSavedMoviesPage = window.location.pathname === '/saved-movies';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSavedMoviesPage) {
            // console.log('saved page');
            filterSavedMovies(inputText.toLowerCase(), checkboxShortMovies);
        } else {
            handleSearchMovies(inputSearchForm, checkboxValue);
        }
    };

    const handleInputChange = (e) => {
        if (isSavedMoviesPage) {
            seInputText(e.target.value);
        } else {
            setInputSearchForm(e.target.value);
        }
    };

    const handleCheckbox = (e) => {
        if (isSavedMoviesPage) {
            filterSavedMovies(inputText, e.target.checked);
            setCheckboxShortMovies(e.target.checked);
        } else {
            setCheckboxValue(e.target.checked);
            handleSearchMovies(inputSearchForm, e.target.checked);
        }
    };

    return (
        <div className='search'>
            <div className='container container_movies-mobile'>
                <div className='search__wrapper'>
                    <form className='search__form' action='#' onSubmit={handleSubmit}>
                        <div className='search__inner'>
                            <input
                                className='search__input'
                                type='text'
                                name='search'
                                placeholder='Фильм'
                                value={inputSearchForm}
                                onChange={handleInputChange}
                                required
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
                            handleCheckbox={handleCheckbox}
                            checkboxValue={checkboxValue}
                        />
                        <SwitchToggleMobile
                            name={'Короткометражки'}
                            handleCheckbox={handleCheckbox}
                            checkboxValue={checkboxValue}
                        />

                        {!inputSearchForm && !inputText && (
                            <span className='search__error'></span>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};