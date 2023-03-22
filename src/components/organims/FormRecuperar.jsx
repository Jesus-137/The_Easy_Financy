import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HeaderForm from '../molecules/HeaderForm';
import Input from '../atoms/Input';
import SubTitle from '../atoms/Subtitle';
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

function FormRecuperar() {
  const navigate = useNavigate();
  const Correo=(e)=>{
    e.preventDefault();
    navigate("/correo")
  }
  return (
    <Div>
      <HeaderForm name={"Recuperar contraseña"}/>
      <form>
        <SubTitle subTitle={"Nececitamos comprobar tu identidad"}/>
        <Input data={"Correo electronico"} type={'email'} name={"correo"}/>
        <Boton data={"Mandar correo"} type={'button'} onClick={Correo}/>
        <StyledLink to={"/"}>Cancelar</StyledLink>
      </form>
    </Div>
  );
}

export default FormRecuperar;