import { BASE_URL, MOVIES_URL, MOVIES_IMAGE_URL } from './constants';

class Api {
    constructor(BASE_URL, MOVIES_URL, MOVIES_IMAGE_URL) {
        this._URL = BASE_URL;
        this._MOVIES_URL = MOVIES_URL;
        this._MOVIES_IMAGE_URL = MOVIES_IMAGE_URL;
    };

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    };

    _request(url, options) {
        return fetch(url, options).then(this._getJson);
    };

    sendUser(data) {
        const promise = fetch(`${this._URL}/users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        });
        return promise.then(this._getJson);
    };

    getSavedMovies() {
        return fetch(`${BASE_URL}/movies`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(this._getJson);
    };

    // sendMovies(data, email) {
    //     const promise = fetch(`${this._URL}/movies`, {
    //         method: 'POST',
    //         headers: this._getHeaders(),
    //         body: JSON.stringify({
    //             country: data.country,
    //             director: data.director,
    //             duration: data.duration,
    //             year: data.year,
    //             description: data.description,
    //             image: `${this._MOVIES_IMAGE_URL}${data.image.url}`,
    //             trailerLink: data.trailerLink,
    //             nameEN: data.nameEN,
    //             nameRU: data.nameRU,
    //             thumbnail: `${this._MOVIES_URL}data.image.formats.thumbnail.url`,
    //             movieId: data.id,
    //             owner: email,
    //         }),
    //     });
    //     return promise.then(this._getJson);
    // };

    sendMovies(movie) {
        return fetch(`${BASE_URL}/movies`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: "https://api.nomoreparties.co" + movie.image.url,
                trailerLink: movie.trailerLink,
                thumbnail:
                    "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            }),
        })
            .then(this._getJson);
    }

    deleteMovies(id) {
        const promise = fetch(`${this._URL}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        });
        return promise.then(this._getJson);
    };
};

const MainApi = new Api(BASE_URL, MOVIES_URL, MOVIES_IMAGE_URL);
export default MainApi;