import styled from 'styled-components';
import Input from '../atoms/Input';
import SubTitle from '../atoms/Subtitle';
import Logo from '../atoms/Logo';
import Title from '../atoms/Title';
import Boton from '../atoms/Boton';
import StyledLink from '../atoms/Link';
import TEF from '../../assets/img/TEF.png';

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
  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    text-align: center;
    margin-bottom: 7%;
    padding-right: 30%;
    width: 69.9%;
    border-bottom: 5px dashed;
  }
`;

function FormRecuperar() {
  return (
    <>
      <Div>
        <div className='header'>
          <Logo img={TEF}/>
          <Title title={"Recuperar Contraceña"}/>
        </div>
        <form>
          <SubTitle subTitle={"Nececitamos comprobar tu identidad"}/>
          <Input data={"Correo electronico"} type={'email'} name={"correo"}/>
          <Boton data={"Mandar correo electrónico"} type={'button'} onClick={''}/>
          <StyledLink to={"/"}>Cancelar</StyledLink>
        </form>
      </Div>
    </>
  );
}

export default FormRecuperar;