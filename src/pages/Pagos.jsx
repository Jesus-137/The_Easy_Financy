import HeaderS from '../components/molecules/HeaderStatic';
import ContentPago from '../components/organims/ContentPagos';
import Footer from '../components/molecules/Footer';

function Pagos() {
    return (
        <div>
            <HeaderS title={"Pagos"}/>
            <ContentPago/>
            <Footer/>
        </div>
    );
}

export default Pagos;