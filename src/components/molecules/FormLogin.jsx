import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import styled from 'styled-components';
import UserContext from "../../context/UserContext";
import Logo from "../atoms/Logo";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import Boton from "../atoms/Boton";
import Parrafo from "../atoms/Parrafo";
import logo from "../../assets/img/TEF.png";
import StyledLink from "../atoms/Link";

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


function FromLogin() {
    const {isLoged, setIsLoged} = UserContext;
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([]);

    const chandlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current)
        if (newForm.get('usuario')==''){
            setState('El campo nombre de usuario no puede estar vacio')
        }else if(newForm.get('contrasenia')==''){
            setState('El campo contraseña no puede estar vacio')
        }else{
            fetch('http://localhost:8080/user/getAll')
            .then(response=>response.json())
            .then(data=>{
                const usuarios=data
                let i=0;
                let encontrado=false
                while(!encontrado&&i<usuarios.length){
                    if (usuarios[i].nombre_usuario==newForm.get('usuario')){
                        if(usuarios[i].contrasenia==newForm.get('contrasenia')){
                            encontrado=true
                            navigate('/grafica')
                        }
                    }
                    i++;
                }
                if(!encontrado){
                    setState('usuario no encontrado')
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
                    <Title title={"Iniciar sesion"}/>
                </div>
                <form ref={form}>
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

export default FromLogin;