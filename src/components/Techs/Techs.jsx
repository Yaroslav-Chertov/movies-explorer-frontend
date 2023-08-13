import { TitleBlock } from '../elements/TitleBlock/TitleBlock';

export const Techs = () => {
    return (
        <section className='techs' id='techs'>
            <div className='container'>
                <TitleBlock name='Технологии' margin='techs__title' />
                <h3 className='techs__subtitle'>7&nbsp;технологий</h3>
                <p className='techs__text'>
                    На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в
                    дипломном проекте.
                </p>
                <ul className='techs__list'>
                    <li className='techs__item'>HTML</li>
                    <li className='techs__item'>CSS</li>
                    <li className='techs__item'>JS</li>
                    <li className='techs__item'>React</li>
                    <li className='techs__item'>Git</li>
                    <li className='techs__item'>Express.js</li>
                    <li className='techs__item'>mongoDB</li>
                </ul>
            </div>
        </section>
    );
};