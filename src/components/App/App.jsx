import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect, useState } from 'react';

import * as Auth from '../../utils/Auth';
import { Landing } from '../pages/Landing';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Movies } from '../pages/Movies';
import { SavedMovies } from '../pages/SavedMovies';
import { NotFoundPage } from '../pages/NotFoundPage';
import MainApi from '../../utils/MainApi.js';
import MoviesApi from '../../utils/MoviesApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ProtectedRouteLoggedIn from '../ProtectedRouteLoggedIn/ProtectedRouteLoggedIn';

const App = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [profileChanged, setProfileChanged] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [tokenExist, setTokenExist] = useState(true);
    const [apiMoviesList, setApiMoviesList] = useState([]);
    const [savedMoviesList, setSavedMoviesList] = useState([]);
    const jwt = localStorage.getItem('jwt');
    const isSignupPage = window.location.pathname === '/signup';
    const isLoginPage = window.location.pathname === '/signin';
    const isProfilePage = window.location.pathname === '/profile';
    const isMoviesPage = window.location.pathname === '/movies';
    const isSavedMoviesPage = window.location.pathname === '/saved-movies';

    //проверить токен
    useEffect(() => {
        if (jwt) {
            Promise.all([
                Auth.getUserData(jwt),
                MoviesApi.getMovies(),
                MainApi.getSavedMovies(),
            ])
                .then(([userData, apiMovies, savedMovies]) => {
                    setIsLoggedIn(true);
                    setCurrentUser(userData);
                    setApiMoviesList(apiMovies);
                    setSavedMoviesList(savedMovies);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setTokenExist(false);
        }
    }, [jwt]);

    //сохранить фильм
    const saveMovie = (movieData, email) => {
        MainApi.sendMovies(movieData, email)
            .then((likedMovie) => {
                setSavedMoviesList([likedMovie.data, ...savedMoviesList].reverse());
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // удалить фильм
    const deleteMovie = (id) => {
        MainApi.deleteMovies(id)
            .then(() => {
                setSavedMoviesList((savedMovies) =>
                    savedMovies.filter((c) => c._id !== id)
                );
            })
            .catch((err) => {
                console.error(err);
            });
    };

    //регистрация
    const registerUser = (name, password, email) => {
        Auth.registerUser(name, password, email)
            .then((res) => {
                Auth.authorizeUser(password, email)
                    .then((res) => {
                        localStorage.setItem("jwt", res.token);
                        setIsLoggedIn(true);
                        setTokenExist(true);
                        navigate("/movies");
                    })
                    .catch((err) => {
                        console.log(err);
                        if (err) {
                            setErrorMessage(err);
                        }
                    });
            })
            .catch((err) => {
                console.log(err);
                if (err) {
                    setErrorMessage(err);
                }
            });
    };

    //войти
    const loginUser = (email, password) => {
        Auth.authorizeUser(email, password)
            .then((res) => {
                localStorage.setItem("jwt", res.token);
                setIsLoggedIn(true);
                setTokenExist(true);
                navigate("/movies");
            })
            .catch((err) => {
                console.log(err);
                if (err) {
                    setErrorMessage(err);
                }
            });
    };

    //выйти
    const logOut = () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("movies");
        localStorage.removeItem("foundMovies");
        localStorage.removeItem("inputValue");
        localStorage.removeItem("checkboxValue");
        setIsLoggedIn(false);
        navigate("/");
    };

    //обновить данные юзера
    const updateUser = (form) => {
        setIsLoading(true);
        MainApi.sendUser(form)
            .then((resp) => {
                setCurrentUser((prev) => ({ ...prev, data: resp }))
            })
            .catch((err) => {
                console.log(err);
                if (err) {
                    setErrorMessage(err);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    //скрыть уведомление о смене данных пользователя
    useEffect(() => {
        setProfileChanged(false);
    }, [isProfilePage]);


    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <Routes>
                    <Route
                        index
                        path='/'
                        element={<Landing isLoggedIn={isLoggedIn} isLoading={isLoading} />}
                    />

                    <Route
                        exact
                        path='/signup'
                        element={
                            <ProtectedRouteLoggedIn
                                element={Register}
                                registerUser={registerUser}
                                errorMessage={errorMessage}
                                isSignupPage={isSignupPage}
                                tokenExist={tokenExist}
                                isLoggedIn={isLoggedIn}
                            />
                        }
                    />

                    <Route
                        exact
                        path='/signin'
                        element={
                            <ProtectedRouteLoggedIn
                                element={Login}
                                loginUser={loginUser}
                                errorMessage={errorMessage}
                                isLoginPage={isLoginPage}
                                tokenExist={tokenExist}
                                isLoggedIn={isLoggedIn}
                            />
                        }
                    />

                    <Route
                        exact
                        path='/profile'
                        element={
                            <ProtectedRoute
                                element={Profile}
                                logOut={logOut}
                                updateUser={updateUser}
                                isLoading={isLoading}
                                isLoggedIn={isLoggedIn}
                                tokenExist={tokenExist}
                                profileChanged={profileChanged}
                                setProfileChanged={setProfileChanged}
                                errorMessage={errorMessage}
                                setErrorMessage={setErrorMessage}
                            />
                        }
                    />

                    <Route
                        exact
                        path='/movies'
                        element={
                            <ProtectedRoute
                                element={Movies}
                                isLoggedIn={isLoggedIn}
                                isLoading={isLoading}
                                tokenExist={tokenExist}
                                apiMoviesList={apiMoviesList}
                                savedMoviesList={savedMoviesList}
                                saveMovie={saveMovie}
                                deleteMovie={deleteMovie}
                                isSavedMoviesPage={isSavedMoviesPage}
                                isMoviesPage={isMoviesPage}
                            />
                        }
                    />

                    <Route
                        exact
                        path='/saved-movies'
                        element={
                            <ProtectedRoute
                                element={SavedMovies}
                                isLoggedIn={isLoggedIn}
                                isLoading={isLoading}
                                tokenExist={tokenExist}
                                savedMoviesList={savedMoviesList}
                                deleteMovie={deleteMovie}
                            />
                        }
                    />

                    <Route exact path='/*' element={<NotFoundPage />} />
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    );
};

export default App;