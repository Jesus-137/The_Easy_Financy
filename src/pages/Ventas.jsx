import styled from "styled-components";
import HeaderS from "../components/molecules/HeaderStatic";
import ContentVenta from "../components/organims/ContentVenta";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function Ventas() {
    return (
        <Div>
            <HeaderS title={"Ventas"}/>
            <ContentVenta/>
        </Div>
    );
}

export default Ventas;