import styled from 'styled-components';
import Input from '../atoms/Input';
import Boton from '../atoms/Boton';
import StyledLink from '../atoms/Link';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 45%;
`;

function FormProduccion() {
    return (
        <Div>
            <form>
                <Input type={"number"} data={"Costo por dia"} name={"costo"}/>
                <Input type={"number"} data={"Cantidad"} name={"cantidad"}/>
                <Boton data={"Registrar"}/>
                <StyledLink to={"/venta"}>
                    <Boton data={"Ventas"}/>
                </StyledLink>
            </form>
        </Div>
    );
}

export default FormProduccion;