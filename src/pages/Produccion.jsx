import styled from 'styled-components';
import HeaderS from '../components/molecules/HeaderStatic';
import ContentProduccion from '../components/organims/ContentProduccion';
import Footer from '../components/molecules/Footer';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

function Produccion() {
    return (
        <Div>
            <HeaderS title={"Produccion"}/>
            <ContentProduccion/>
            <Footer/>
        </Div>
    );
}

export default Produccion;