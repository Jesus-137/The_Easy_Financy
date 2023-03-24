import HeaderS from "../components/molecules/HeaderStatic";
import ContentMaquina from "../components/organims/ContentMaquina";
import Footer from "../components/molecules/Footer";

function Maquina() {
    return (
        <div>
            <HeaderS title={"Maquinas"}/>
            <ContentMaquina/>
            <Footer/>
        </div>
    );
}

export default Maquina;