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
    @media screen and (min-width: 320px) and (max-width: 600px) {
        width: 96%;
    }
`;

function FormMaquina() {
    return (
        <Div>
            <Input data={"Folio"} type={"number"} name={"folio"}/>
            <Input data={"Nombre de la maquina"} type={"text"} name={"nombre"}/>
            <Input data={"Fecha del ultimo mantenimiento de compra"} type={"date"} name={"fecha"}/>
            <Boton data={"Registrar maquina"} type={"button"}/>
            <StyledLink to={"/venta"}>
                <Boton data={"Ventas"} type={"button"}/>
            </StyledLink>
        </Div>
    );
}

export default FormMaquina;