import { TitleBlock } from '../elements/TitleBlock/TitleBlock';
import studentPic from '../../images/my_photo.jpeg';
import arrow from '../../images/arrow_link.svg';

export const AboutMe = () => {
    return (
        <section className='about-me' id='about-me'>
            <div className='container'>
                <TitleBlock name='Студент' margin='about-me__title' />
                <div className='about-me__wrapper'>
                    <div className='about-me__box'>
                        <h3 className='about-me__name'>Ярослав</h3>
                        <p className='about-me__profession'>
                            Фронтенд-разработчик, 32&nbsp;года
                        </p>
                        <p className='about-me__description'>
                            Учился в&nbsp;МГТУ им. Г.И. Носова на&nbsp;факультете горных технологий и&nbsp;транспорта.
                            Еще с&nbsp;университетских лет интересовался созданием сайтов. Находил клиентов и&nbsp;делал
                            типовые проекты на&nbsp;популярных CMS. Параллельно работал по&nbsp;направлению new business в&nbsp;крупнейших It-компаниях страны.
                            В&nbsp;2023 году закончил обучение в&nbsp;Яндекс.Практикуме по&nbsp;специальности &laquo;Веб-разработчик&raquo;.
                            В&nbsp;свободное время занимаюсь резьбой по&nbsp;дереву. Люблю активный отдых на&nbsp;природе и&nbsp;путешествия по&nbsp;Северу.
                            Отдельная любовь&nbsp;&mdash; Финляндия.
                        </p>
                        <a
                            className='about-me__link hover-link'
                            rel='noreferrer'
                            href='https://github.com/Yaroslav-Chertov'
                            target='_blank'
                        >
                            Github
                        </a>
                    </div>

                    <img
                        className='about-me__image'
                        src={studentPic}
                        alt='Фото студента'
                    />
                </div>

                <span className='about-me__portfolio'>Портфолио</span>
                <ul className='about-me__items'>
                    <li className='about-me__item'>
                        <a
                            className='about-me__item-link hover-link'
                            rel='noreferrer'
                            href='https://yaroslav-chertov.github.io/how-to-learn/'
                            target='_blank'
                        >
                            Статичный сайт
                            <img className='about-me__arrow' src={arrow} alt='Стрелка' />
                        </a>
                    </li>
                    <li className='about-me__item'>
                        <a
                            className='about-me__item-link hover-link'
                            rel='noreferrer'
                            href='https://yaroslav-chertov.github.io/russian-travel/'
                            target='_blank'
                        >
                            Адаптивный сайт
                            <img className='about-me__arrow' src={arrow} alt='Стрелка' />
                        </a>
                    </li>
                    <li className='about-me__item'>
                        <a
                            className='about-me__item-link hover-link'
                            rel='noreferrer'
                            href='https://yaroslav-chertov.github.io/mesto-react'
                            target='_blank'
                        >
                            Одностраничное приложение
                            <img className='about-me__arrow' src={arrow} alt='Стрелка' />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};