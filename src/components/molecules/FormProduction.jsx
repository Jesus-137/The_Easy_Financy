import styled from 'styled-components';
import Input from '../atoms/Input';
import Boton from '../atoms/Boton';
import StyledLink from '../atoms/Link';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 45%;
`;


function FormProducto() {
    return (
        <StyledForm>
            <Input data={"Nombre del producto"} type={"text"} name={"NombreP"}/>
            <Input data={"Precio"} type={"number"} name={"PrecioP"}/>
            <Input data={"Sueldo por dia"} type={"number"} name={"SuledoP"}/>
            <Input data={"Folio"} type={"number"} name={"FolioP"}/>
            <Boton data={"Registar"}/>
            <StyledLink to={"/venta"}>
                <Boton data={"Ventas"}/>
            </StyledLink>
        </StyledForm>
    );
}

export default FormProducto;