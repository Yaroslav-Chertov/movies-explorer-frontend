import { TitleBlock } from '../elements/TitleBlock/TitleBlock';

export const AboutProject = () => {
    return (
        <section className='about-project' id='project'>
            <div className='container'>
                <TitleBlock name='О проекте' margin='about-project__title' />
                <div className='about-project__content'>
                    <div className='about-project__info'>
                        <h3 className='about-project__plan'>Дипломный проект включал 5&nbsp;этапов</h3>
                        <p className='about-project__description'>
                            Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и&nbsp;финальные доработки.
                        </p>
                    </div>
                    <div className='about-project__info'>
                        <h3 className='about-project__plan'>
                            На&nbsp;выполнение диплома ушло 5&nbsp;недель
                        </h3>
                        <p className='about-project__description'>
                            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>

                <div className='about-project__time'>
                    <div className='about-project__top'>
                        <div className='about-project__week about-project__week_small'>1 неделя</div>
                        <div className='about-project__week'>4 недели</div>
                    </div>

                    <div className='about-project__bottom'>
                        <div className='about-project__signature about-project__signature_small'>
                            Back-end
                        </div>
                        <div className='about-project__signature'>Front-end</div>
                    </div>
                </div>
            </div>
        </section>
    );
};