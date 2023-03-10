import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import Boton from '../atoms/Boton';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`;


function FormProducto() {
    const Navigate=useNavigate()
    const Ventas=()=>{
        Navigate("/venta")
    }
    return (
        <StyledForm>
            <Input data={"Nombre del producto"} type={"text"} name={"NombreP"}/>
            <Input data={"Precio"} type={"number"} name={"PrecioP"}/>
            <Input data={"Sueldo por dia"} type={"number"} name={"SuledoP"}/>
            <Input data={"Folio"} type={"number"} name={"FolioP"}/>
            <Boton data={"Registar"}/>
            <Boton data={"ventas"} onClick={Ventas}/>
        </StyledForm>
    );
}

export default FormProducto;