import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

export const MoviesCard = ({
  movie,
  savedMoviesList,
  saveMovie,
  deleteMovie,
  deleteFilteredMovie,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const isSavedMoviesPage = window.location.pathname === "/saved-movies";

  const handleSaveOrDeleteMovie = () => {
    if (isSavedMoviesPage) {
      deleteMovie(movie._id);
      deleteFilteredMovie(movie._id);
    } else {
      if (movie.status === "default") {
        saveMovie(movie, currentUser.data.email);
      } else {
        deleteMovie(movie.id);
      }
    }
  };

  const timeЕranslation = () => {
    const totalMinutes = movie.duration;
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}ч ${minutes !== 0 ? minutes + "м" : ""}`;
  };

  return (
    <li className="movies-cards__item">
      <div className="movies-cards__head">
        <div className="movies-cards__info">
          <h3 className="movies-cards__title">{movie.nameRU}</h3>
          <p className="movies-cards__duration">
            {movie.duration > 60 ? timeЕranslation() : `${movie.duration} мин`}
          </p>
        </div>
      </div>
      <a
        className="movies-cards__link"
        target="_blank"
        rel="noreferrer"
        href={movie.trailerLink}
      >
        <img
          className="movies-cards__image"
          src={
            isSavedMoviesPage
              ? movie.image
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          alt="Обложка фильма"
        />
      </a>
      <button
        className={`movies-cards__favourite ${movie.status === "liked" || movie.status === "remove"
          ? "movies-cards__favourite_active"
          : ""
          } ${isSavedMoviesPage ? "movies-cards__favourite_saved" : ""
          }  hover-link`}
        aria-label="Добавить фильм в избранное"
        onClick={handleSaveOrDeleteMovie}
      >
        Сохранить
      </button>
    </li>
  );
};