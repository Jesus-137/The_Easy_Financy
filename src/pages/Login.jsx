import styled from 'styled-components';
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
// import { useContext } from 'react';
// import UserContext from '../context/UserContext';
import FormI from '../components/organims/FormI';
import LogoBig from '../components/atoms/LogoBig';
import Input from '../components/atoms/Input';
import Title from '../components/atoms/Title';
import Parrafo from '../components/atoms/Parrafo';
import Boton from '../components/atoms/BotonF';
import LinkB from '../components/atoms/LinkB';
import logo from '../assets/img/TEF.png';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;


function Login() {
    // const {isLoged, setIsLoged} = useContext(UserContext);
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
            // setIsLoged(true)
            navigate('/grafica')
        }
    }
    return (
        <Div>
            <FormI form={form} contentF={
                <>
                    <Input data={"Nombre de usuario"} type={"text"} name={"usuario"}/>
                    <Input data={"Contraceña"} type={"password"} name={"contrasenia"}/>
                    <Boton data={"Aceptar"} onClick={chandlerClick}/>
                    <LinkB data={"¿No tienes cuenta?"} to={"/crear"} link={"Crea una aqui"}/>
                    <LinkB link={"Recuperar contraseña"} to={"/recuperar"}/>
                    <Parrafo msn={state}/>
                </>
            }
            msn={
                <>
                    <Title title={"Bienvenido de nuevo"}/>
                    <Parrafo msn={"¡Bienvenido de nuevo! Por favor ingrese sus datos"}/>
                </>
            }
            img={
                <LogoBig img={logo}/>
            }
            />
        </Div>
    );
}

export default Login;