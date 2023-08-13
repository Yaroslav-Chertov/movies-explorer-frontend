import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
// import { Preloader } from '../Preloader/Preloader';

export const Landing = () => {
    return (
        <>
            <Main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </Main>
            <Footer />
            {/* <Preloader /> */}
        </>
    );
};