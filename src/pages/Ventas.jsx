import styled from "styled-components";
import Header from "../components/molecules/HeaderNoLink";
import ContentVenta from "../components/organims/ContentVenta";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function Ventas() {
    return (
        <Div>
            <Header title={"Ventas"}/>
            <ContentVenta/>
        </Div>
    );
}

export default Ventas;