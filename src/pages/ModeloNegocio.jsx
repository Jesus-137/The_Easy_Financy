import HeaderS from "../components/molecules/HeaderStatic";
import ContentModelo from "../components/organims/ContentModelo";
import Footer from "../components/molecules/Footer";

function ModeloNegocio() {
    return (
        <div>
            <HeaderS title={"Modelo de negocio"}/>
            <ContentModelo/>
            <Footer/>
        </div>
    );
}

export default ModeloNegocio;