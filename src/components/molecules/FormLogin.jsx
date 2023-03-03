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

const Div = styled.div`
    width: 50%;
    .header{
        display: flex;
        flex-direction: row;
        justify-items: center;
        text-align: center;
        padding: 1%;
        margin: 10% 0%;
        width: 100%;
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
            // fetch('http://localhost:8080/user/getAll')
            // .then(response=>response.json())
            // .then(data=>{
            //     setState(JSON.stringify(data))
            //     const usuarios=data
            //     let i=0;
            //     let encontrado=false
            //     while(!encontrado&&i<usuarios.length){
            //         if (usuarios[i].nombre_usuario==newForm.get('usuario')){
            //             if(usuarios[i].contrasenia==newForm.get('contrasenia')){
            //                 encontrado=true
            //                 navigate('/grafica')
            //             }
            //         }
            //         i++;
            //     }
            //     if (!encontrado){
            //         setState('Usuario no encontrado verifique los campos')
            //     }
            // })
            navigate("/grafica")
        }
    }
    return (
        <Div>
            <div className="header">
                <Logo img={logo}/>
                <Title title={"Iniciar sesion"}/>
            </div>
            <form ref={form}>
                <Input type={"text"} name={"usuario"} data={"Nombre de usuario"}/>
                <Input type={"text"} name={"contrasenia"} data={"Contraseña"}/>
                <Boton onClick={chandlerClick} data={"Iniciar"}/>
            </form>
            <Parrafo msn={state}/>
        </Div>
    );
}

export default FromLogin;