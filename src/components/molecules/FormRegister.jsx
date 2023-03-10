import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Logo from '../atoms/Logo';
import Title from '../atoms/Title';
import Boton from '../atoms/Boton';
import Parrafo from '../atoms/Parrafo';
import logo from '../../assets/img/TEF.png';
import StyledLink from '../atoms/Link';

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


function FromRegister() {
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
                firstName: newForm.get('Primer nombre'),
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
                <div className="header">
                    <Logo img={logo}/>
                    <Title title={"Crear Cuenta"}/>
                </div>
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