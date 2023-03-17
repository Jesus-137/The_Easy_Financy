import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import styled from 'styled-components';
import UserContext from "../../context/UserContext";
import StyledLink from "../atoms/Link";
import Input from "../atoms/Input";
import Boton from "../atoms/Boton";
import Parrafo from "../atoms/Parrafo";
import HeaderForm from "../molecules/HeaderForm";

const Div = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 45%;
    border: 3px dashed #595F81;
    margin-top: 7%;
    text-align: center;
    font-size: 1.5rem;
    padding-bottom: 1%;
`;


function FromLogin() {
    const {isLoged, setIsLoged} = useContext(UserContext);
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
            // fetch('http://localhost:8080/user/getAll')
            // .then(response=>response.json())
            // .then(data=>{
            //     const usuarios=data
            //     let i=0;
            //     let encontrado=false
            //     alert(usuarios[i].nombre_usuario)
            //     while(!encontrado&&i<usuarios.length){
            //         if (usuarios[i].nombre_usuario==newForm.get('usuario')){
            //             if(usuarios[i].contrasenia==newForm.get('contrasenia')){
            //                 setIsLoged(true)
            //                 encontrado=true
            //                 navigate('/grafica')
            //             }
            //         }
            //         i++;
            //     }
            //     if(!encontrado){
            //         setState('usuario no encontrado')
            //     }
            // })
            setIsLoged(true)
            navigate('/grafica')
        }
    }
    return (
        <>
            <Div>
                <HeaderForm name={"Iniciar secion"}/>
                <form ref={form}>
                    <Input type={"text"} name={"usuario"} data={"Nombre de usuario"}/>
                    <Input type={"password"} name={"contrasenia"} data={"Contraseña"}/>
                    <StyledLink to={"/crear"}><Boton data={"¿No tienes cuenta? cree una cuenta"}/></StyledLink>
                    <Boton onClick={chandlerClick} data={"Aceptar"}/>
                    <StyledLink to={"/recuperar"}><Boton data={"RecuperarCuenta"}/></StyledLink>
                    <StyledLink to={"/"}>Cancelar</StyledLink>
                </form>
            </Div>
            <Parrafo msn={state}/>
        </>
    );
}

export default FromLogin;