const BASE_URL = 'https://api.yaroslav.movies.nomoredomains.xyz';
// const BASE_URL = 'http://localhost:3000';
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MOVIES_IMAGE_URL = 'https://api.nomoreparties.co';

const MOVIES_LIST_1280 = 12;
const MOVIES_LIST_480 = 5;
const SHOW_MORE_768 = 3;
const SHOW_MORE_480 = 2;
const SHORT_MOVIE = 40;

export const NAME_REGEX = /^[a-zа-яё\-\s]+$/i;
export const MESSAGES = {
    NAME_ERROR:
        "Имя должно содержать только латиницу, кириллицу, пробел и/или дефис.",
    EMAIL_ERROR: "Некорректный email",
};

export {
    BASE_URL,
    MOVIES_URL,
    MOVIES_IMAGE_URL,
    MOVIES_LIST_1280,
    MOVIES_LIST_480,
    SHOW_MORE_768,
    SHOW_MORE_480,
    SHORT_MOVIE,
};
