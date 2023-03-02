import styled from 'styled-components';
import Input from '../atoms/Input';
import Boton from '../atoms/Boton';

const StyledForm = styled.form`

`;


function FromProducto() {
    return (
        <StyledForm>
            <Input data={"Nombre del producto"} type={"text"} name={"NombreP"}/>
            <Input data={"Precio"} type={"number"} name={"PrecioP"}/>
            <Input data={"Sueldo por dia"} type={"number"} name={"SuledoP"}/>
            <Input data={"Folio"} type={"number"} name={"FolioP"}/>
            <Boton data={"Registar"}/>
            <Boton data={"ventas"}/>
        </StyledForm>
    );
}

export default FromProducto;