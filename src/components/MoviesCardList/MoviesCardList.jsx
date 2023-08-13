import { MoviesCard } from '../MoviesCard/MoviesCard';
import moviePic from '../../images/pic__movie.jpg';

export const MoviesCardList = () => {
    return (
        <section className='movies-cards'>
            <div className='container'>
                <ul className='movies-cards__list'>
                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />

                    <MoviesCard
                        title='В погоне за Бенкси'
                        duration=' 27 минут'
                        image={moviePic}
                        link='https://youtu.be/K521T9HmGyM'
                    />
                </ul>

                <button
                    className='movies-cards__more hover-link'
                    aria-label='Показать еще фильмы'
                >
                    Ещё
                </button>
            </div>
        </section>
    );
};