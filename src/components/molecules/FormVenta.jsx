import styled from "styled-components";
import Input from "../atoms/Input";
import Boton from "../atoms/Boton";

const StyledForm = styled.form`
  /* ... */
`;

function FormVenta() {
    return (
        <>
            <StyledForm>
                <Input data={"Folio del producto"}/>
                <Input data={"Ventas por mes"}/>
                <Input data={"Mes"}/>
            </StyledForm>
        </>
    );
}

export default FormVenta;