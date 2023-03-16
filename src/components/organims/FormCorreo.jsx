import styled from 'styled-components';
import HeaderForm from '../molecules/HeaderForm';
import Input from '../atoms/Input';
import Boton from '../atoms/Boton';
import StyledLink from '../atoms/Link';

const Div = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 45%;
  border: 3px dashed #595F81;
  margin-top: 10%;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1%;
`;

function FormCorreo() {
  return (
    <Div>
      <HeaderForm name={'Cambiar contraseña'}/>
      <form>
        <Input data={"Nueva contraceña"} type={"password"}/>
        <Input data={"Repetir contraceña"} type={"password"}/>
        <Boton data={"Aceptar"} type={"button"}/>
        <StyledLink to={"/iniciar"}>Cancelar</StyledLink>
      </form>
    </Div>
  );
}

export default FormCorreo;