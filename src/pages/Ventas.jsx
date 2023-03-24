import styled from "styled-components";
import HeaderS from "../components/molecules/HeaderStatic";
import ContentVenta from "../components/organims/ContentVenta";
import StyledLinkW from "../components/atoms/LinkWhite";
import Footer from "../components/molecules/Footer";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

function Ventas() {
    return (
        <Div>
            <HeaderS title={"Ventas"} links={
                <>
                    <StyledLinkW to={'/meta'}>Metas</StyledLinkW>
                    <StyledLinkW to={'/maquina'}>Maquinas</StyledLinkW>
                    <StyledLinkW to={'/riesgo'}>Riesgo</StyledLinkW>
                    <StyledLinkW to={'/almacen'}>Almacen</StyledLinkW>
                    <StyledLinkW to={'/produccion'}>Producción</StyledLinkW>
                </>
            }/>
            <ContentVenta/>
            <Footer/>
        </Div>
    );
}

export default Ventas;