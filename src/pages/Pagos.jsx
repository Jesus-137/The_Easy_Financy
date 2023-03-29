import HeaderS from '../components/molecules/HeaderStatic';
import ContentPago from '../components/organims/ContentPagos';
import Footer from '../components/molecules/Footer';

function Pagos() {
    return (
        <div>
            <HeaderS title={"Pagos realizados"}/>
                <ContentPago/>
            <Footer/>
        </div>
    );
}

export default Pagos;