import Header from "../components/molecules/HeaderFixed";
import ContentHome from "../components/organims/ContentHome";
import Footer from "../components/molecules/Footer";
import StyledLinkW from "../components/atoms/LinkWhite";

function HomeView() {
    return (
        <>
            <Header links={
            <>
                <StyledLinkW to="/iniciar">Iniciar sesión</StyledLinkW>
                <StyledLinkW to="/crear">Registrarte</StyledLinkW>
            </>
            }/>
            <ContentHome/>
            <Footer/>
        </>
    );
}

export default HomeView;