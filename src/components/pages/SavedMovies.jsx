import { useState, useEffect } from 'react';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { SearchForm } from '../elements/SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';

export const SavedMovies = ({ isLoggedIn, savedMoviesList, deleteMovie }) => {
  const [likedMovies, setLikedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unsuccessfulSearch, setUnsuccessfulSearch] = useState('');
  const [searchError, setSearchError] = useState('');
  const [filterMoves, setFilterMoves] = useState([]);

  useEffect(() => {
    setLikedMovies(savedMoviesList);
  }, [savedMoviesList]);

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  async function filterSavedMovies(inputValue, checkbox) {
    setLoading(true);
    await timeout(1500);

    try {
      if (checkbox) {
        const movies = likedMovies.filter((movie) => {
          return (
            (movie.nameRU.toLowerCase().includes(inputValue) ||
              movie.nameEN.toLowerCase().includes(inputValue)) &&
            movie.duration <= 40
          );
        });

        if (movies.length === 0) {
          setUnsuccessfulSearch('Ничего не найдено.');
        } else {
          setUnsuccessfulSearch('');
        }
        setFilterMoves(movies);
      } else {
        const movies = likedMovies.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(inputValue) ||
            movie.nameEN.toLowerCase().includes(inputValue)
          );
        });
        setFilterMoves(movies);
      }
    } catch (err) {
      console.log(err);
      setSearchError(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
      );
    }

    setLoading(false);
  }

  function deleteFilteredMovie(id) {
    setFilterMoves((savedMovies) => savedMovies.filter((c) => c._id !== id));

    const localResultSearchMovies = localStorage.getItem('foundMovies');

    if (localResultSearchMovies) {
      const foundMovies = JSON.parse(localResultSearchMovies);
      const deleteMovie = filterMoves.find((c) => c._id === id);

      const updateStatus = foundMovies.map((el) => {
        return el.id === deleteMovie.movieId
          ? { ...el, status: 'default', key: el.id }
          : el;
      });

      localStorage.setItem('foundMovies', JSON.stringify(updateStatus));
    }
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} color={'header_main'} />
      <Main>
        <SearchForm filterSavedMovies={filterSavedMovies} />
        <MoviesCardList
          movies={filterMoves}
          deleteMovie={deleteMovie}
          deleteFilteredMovie={deleteFilteredMovie}
          loading={loading}
          unsuccessfulSearch={unsuccessfulSearch}
          searchError={searchError}
        />
      </Main>
      <Footer />
    </>
  );
};