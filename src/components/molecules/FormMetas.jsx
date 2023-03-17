import styled from 'styled-components';
import Input from "../atoms/Input";
import Boton from "../atoms/Boton";
import StyledLink from '../atoms/Link';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

function FormMeta() {
    return (
        <Div>
            <Input data={"Id"} type={"number"} name={"id"}/>
            <Input data={"Dinero por alcanzar"} type={"number"} name={"dinero"}/>
            <Input data={"Fecha"} type={"date"} name={"fecha"}/>
            <Boton data={"Registrar meta"} type={"button"}/>
            <StyledLink to={"/venta"}>
                <Boton data={"Ventas"} type={"button"}/>
            </StyledLink>
        </Div>
    );
}

export default FormMeta;