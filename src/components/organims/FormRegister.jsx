import { useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../../context/UserContext';
import StyledLink from '../atoms/Link';
import Input from '../atoms/Input';
import Boton from '../atoms/Boton';
import Parrafo from '../atoms/Parrafo';
import HeaderForm from '../molecules/HeaderForm';

const Div = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 45%;
    border: 3px dashed #595F81;
    margin-top: 5%;
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 1%;
`;

function FromRegister() {
    const {isLoged, setIsLoged} = useContext(UserContext);
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([]);
    const endpoint = 'http://localhost:8080/user/create'

    const chandlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current);
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                contrasenia:newForm.get('contrasenia'),
                email:newForm.get('email'),
                first_name: newForm.get('Primer nombre'),
                nombre_usuario:newForm.get('usuario')
            })
        }
        const valors=JSON.parse(options.body)

        if (valors.firstName==''){
            setState('El campo "Primer nombre" no puede estar vacio')
        }else if(valors.email==''){
            setState('El campo "email" no puede estar vacio')
        }else if(valors.nombre_usuario==''){
            setState('El campo "usuario" no puede estar vacio')
        }else if(valors.contrasenia==''){
            setState('El campo "contrasenia" no puede estar vacio')
        }else {
            fetch(endpoint, options) 
            .then(response => response.json())
            .then(data => {
                if (data.status!=false){
                    setIsLoged(true)
                    navigate('/grafica')
                }else{
                    alert(data.message)
                }
            })
            // navigate('/grafica')
        }
    }
    return (
        <>
            <Div>
                <HeaderForm name={"Crear cuenta"}/>
                <form ref={form}>
                    <Input type={"text"} name={"nombre"} data={"Primer nombre"}/>
                    <Input type={"email"} name={"email"} data={"Correo electronico"}/>
                    <Input type={"text"} name={"usuario"} data={"Nombre de usuario"}/>
                    <Input type={"password"} name={"contrasenia"} data={"Contraseña"}/>
                    <Boton onClick={chandlerClick} data={"Aceptar"}/>
                    <StyledLink to={"/"}>Cancelar</StyledLink>
                </form>
            </Div>
            <Parrafo msn={state}/>
        </>
    );
}

export default FromRegister;