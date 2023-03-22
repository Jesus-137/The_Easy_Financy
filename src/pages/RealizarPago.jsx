import styled from "styled-components";
import FormPago from "../components/organims/FormPago";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

function RealizarPago() {
    return (
        <Div>
            <FormPago/>
        </Div>
    );
}

export default RealizarPago;