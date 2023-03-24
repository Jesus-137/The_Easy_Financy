import styled from 'styled-components';
import HeaderS from "../components/molecules/HeaderStatic";
import ContentRiesgo from "../components/organims/ContentRiesgo";
import Footer from "../components/molecules/Footer";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

function Riesgo() {
    return (
        <Div>
            <HeaderS title={"Riesgo empresarial"}/>
            <ContentRiesgo/>
            <Footer/>
        </Div>
    );
}

export default Riesgo;