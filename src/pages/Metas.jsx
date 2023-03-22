import styled from 'styled-components';
import HeaderS from '../components/molecules/HeaderStatic';
import StyledLinkW from '../components/atoms/LinkWhite';
import FormMeta from '../components/molecules/FormMetas';
import ContentMeta from '../components/organims/ContentMeta';
import Footer from '../components/molecules/Footer';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2%;
    @media screen and (min-width: 320px) and (max-width: 600px) {
        flex-direction: column;
    }
`;

function Metas() {
    return (
        <>
            <HeaderS title={"Metas"} links={(
                <>
                    <StyledLinkW to={"/construccion"}>Riesgo</StyledLinkW>
                    <StyledLinkW to={"/pagos"}>pagos</StyledLinkW>
                    <StyledLinkW to={"/construccion"}>Negocios</StyledLinkW>
                </>
            )}/>
            <Div>
                <FormMeta/>
                <ContentMeta/>
            </Div>
            <Footer/>
        </>
    );
}

export default Metas;