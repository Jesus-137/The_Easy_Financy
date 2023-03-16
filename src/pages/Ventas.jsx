import styled from "styled-components";
import HeaderS from "../components/molecules/HeaderStatic";
import ContentVenta from "../components/organims/ContentVenta";
import StyledLink from "../components/atoms/Link";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function Ventas() {
    return (
        <Div>
            <HeaderS title={"Ventas"} links={
                <StyledLink to={'/pagos'}>Pagos</StyledLink>
            }/>
            <ContentVenta/>
        </Div>
    );
}

export default Ventas;