import { useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import UserContext from '../context/UserContext';
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
    const {isLoged, setIsLoged} = useContext(UserContext);
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([]);
    const endpoint = 'http://localhost:8080/user/create'

    const chandlerClick=()=>{
        // e.preventDefault();
        const newForm= new FormData (form.current);
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                contrasenia:newForm.get('contraUsuario'),
                email:newForm.get('correoUsuario'),
                nombres: newForm.get('nombreUsuario'),
                usuario: newForm.get('userUsuario'),
                apellido: newForm.get('apellidoUsuario')
            })
        }
        const valors=JSON.parse(options.body)

        if (valors.nombres==''){
            setState('El campo "Nombres" no puede estar vacio')
        }else if(valors.apellido==''){
            setState('El campo "Apellido" no puede estar vacio')
        }else if(valors.usuario==''){
            setState('El campo "Usuario" no puede estar vacio')
        }else if(valors.email==''){
            setState('El campo "Correo electronico" no puede estar vacio')
        }else if(valors.contrasenia==''){
            setState('El campo "Contraseña" no puede estar vacio')
        }else{
            // fetch(endpoint, options) 
            // .then(response => response.json())
            // .then(data => {
            //     if (data.status!=false){
            //         setIsLoged(true)
            //         navigate('/grafica')
            //     }else{
            //         alert(data.message)
            //     }
            // })
            setIsLoged(true)
            navigate('/pagar')
        }
    }
    return (
        <Div>
            <FormD form={form} contentF={<>
                <Input data={"Nombres:"} type={"text"} name={"nombreUsuario"}/>
                <Input data={"Apellidos:"} type={"text"} name={"apellidoUsuario"}/>
                <Input data={"Usuario:"} type={"text"} name={"userUsuario"}/>
                <Input data={"Correo electronico:"} type={'email'} name={"correoUsuario"}/>
                <Input data={"Contraseña:"} type={"password"} name={"contraUsuario"}/>
                <Boton data={"Aceptar"} onClick={chandlerClick} type={"button"}/>
                <StyledLink to={"/"}>Regresar</StyledLink>
                <Parrafo msn={state}/>
                </>}
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