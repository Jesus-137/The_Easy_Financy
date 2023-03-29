import styled from 'styled-components';
import FormC from '../components/organims/FormC';
import Title from '../components/atoms/Title';
import Parrafo from '../components/atoms/Parrafo';
import LogoBig from '../components/atoms/LogoBig';
import Input from '../components/atoms/Input';
import Boton from '../components/atoms/BotonF';
import Link from '../components/atoms/Link'
import CuatroFormC from '../components/atoms/CuatroFromC';
import logo from '../assets/img/TEF.png';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;


function RecuperarCuenta() {
    return (
        <Div>
            <FormC msn={<>
                    <Title title={"Recuperar contraseña"}/>
                    <Parrafo msn={"Necesitamos comprobar tu identidad"}/>
                </>}
                logo={<LogoBig img={logo}/>}
                contentF={<>
                    <Input data={"Correo electronico:"} type={'email'}/>
                    <Boton data={"enviar"}/>
                    <Link to={"/iniciar"}>Regresar</Link>
                </>}
                cuatro={
                    <CuatroFormC/>
                }
            />
        </Div>
    );
}

export default RecuperarCuenta;