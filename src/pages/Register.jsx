import styled from "styled-components";
import FormD from "../components/organims/FormD";
import Title from "../components/atoms/Title";
import TitleW from "../components/atoms/TitleW";
import Parrafo from "../components/atoms/Parrafo";
import Input from "../components/atoms/Input";
import StyledIMG from "../components/atoms/LogoFrom";
import Boton from "../components/atoms/BotonF";
import StyledLink from "../components/atoms/Link";
import logo from '../assets/img/TEF.png';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

function Register() {
    return (
        <Div>
            <FormD contentF={
                <>
                    <Input data={"Nombres:"} type={"text"}/>
                    <Input data={"Apellidos:"} type={"text"}/>
                    <Input data={"Usuario:"} type={"text"}/>
                    <Input data={"Correo electronico:"} type={"email"}/>
                    <Input data={"Contraseña:"} type={"password"}/>
                    <Boton data={"Aceptar"}/>
                    <StyledLink to={"/"}>Regresar</StyledLink>
                </>
            }
            item1={
                <StyledIMG src={logo}/>
            }
            item2 ={
                <TitleW title={"“La mayor parte de la gente piensa, pero nunca hace”"}/>
            }
            msn={
                <>
                    <Title title={"Empezar"}/>
                    <Parrafo msn={"Crea tu cuenta ahora"}/>
                </>
            }
            />
        </Div>
    );
}

export default Register;