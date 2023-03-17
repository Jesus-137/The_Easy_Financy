import styled from "styled-components";
import HeaderS from "../components/molecules/HeaderStatic";
import ContentVenta from "../components/organims/ContentVenta";
import StyledLinkW from "../components/atoms/LinkWhite";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

function Ventas() {
    return (
        <Div>
            <HeaderS title={"Ventas"} links={
                <StyledLinkW to={'/meta'}>Metas</StyledLinkW>
            }/>
            <ContentVenta/>
        </Div>
    );
}

export default Ventas;