import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Header } from '../Header/Header';
import { Landing } from '../pages/Landing';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Movies } from '../pages/Movies';
import { SavedMovies } from '../pages/SavedMovies';
import { NotFoundPage } from '../pages/NotFoundPage';

const App = () => {
    const [isLoggedIn] = useState(true);

    return (
        <div className='page'>
            <Routes>
                <Route path='/' element={
                    <>
                        {/* <Header isLoggedIn={isLoggedIn} color={'header_landing'} /> */}
                        <Header isLoggedIn={false} color={'header_landing'} />
                        <Landing />
                    </>
                }
                />

                <Route path='/signup' element={
                    <>
                        <Register />
                    </>
                }
                />

                <Route path='/signin' element={
                    <>
                        <Login />
                    </>
                }
                />

                <Route path='/profile' element={
                    <>
                        <Header isLoggedIn={isLoggedIn} color={'header_main'} />
                        <Profile />
                    </>
                }
                />

                <Route path='/movies' element={
                    <>
                        <Header isLoggedIn={isLoggedIn} color={'header_main'} />
                        <Movies />
                    </>
                }
                />

                <Route path='/saved-movies' element={
                    <>
                        <Header isLoggedIn={isLoggedIn} color={'header_main'} />
                        <SavedMovies />
                    </>
                }
                />

                <Route exact path='/*' element={
                    <NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;