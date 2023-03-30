import styled from 'styled-components';
import FormC from '../components/organims/FormC';
import CuatroFormC from '../components/atoms/CuatroFromC';
import LogoBig from '../components/atoms/LogoBig';
import Input from '../components/atoms/Input';
import Title from '../components/atoms/Title';
import Parrafo from '../components/atoms/Parrafo';
import StyledLink from '../components/atoms/Link';
import Boton from '../components/atoms/BotonF';
import logo from '../assets/img/TEF.png';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;


function Correomandado() {
    return (
        <Div>
            <FormC contentF={
                <>
                    <Input data={"Nueva contraseña"} type={"password"} name={"contraN"}/>
                    <Input data={"Repetir contraseña"} type={"password"} name={"contraR"}/>
                    <Boton data={"Aceptar"} type="button"/>
                    <StyledLink to={'/recuperar'}>Recuperar</StyledLink>
                </>
            }
            msn={
                <>
                    <Title title={"Bienvenido de nuevo"}/>
                    <Parrafo msn={"¡Bienvenido de nuevo! Por favor ingrese sus datos"}/>
                </>
            }
            cuatro={
                <CuatroFormC/>
            }
            logo={
                <LogoBig img={logo}/>
            }
            />
        </Div>
    );
}

export default Correomandado;