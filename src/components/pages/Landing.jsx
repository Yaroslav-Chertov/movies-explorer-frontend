import { Header } from '../Header/Header';
import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';

export const Landing = ({ isLoggedIn }) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn} color={'header_landing'} />
            <Main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </Main>
            <Footer />
        </>
    );
};