import Header from "../components/molecules/HeaderFixed";
import ContentHome from "../components/organims/ContentHome";
import Footer from "../components/molecules/Footer";
import StyledLinkW from "../components/atoms/LinkWhite";
// import menu from '../assets/img/menu.svg';

function HomeView() {
    return (
        <>
            <Header links={
            <>
                <StyledLinkW to={"/iniciar"}>Iniciar sesión</StyledLinkW>
                <StyledLinkW to={"/crear"}>Registrar</StyledLinkW>
            </>
            }/>
            <ContentHome/>
            <Footer/>
        </>
    );
}

export default HomeView;