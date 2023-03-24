import styled from 'styled-components';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import HeaderForm from '../molecules/HeaderForm';
import Boton from '../atoms/Boton';
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
`;

function FormRegistrarPago() {
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
            navigate('/pagar')
        }
    }
    return (
        <Div>
            <HeaderForm name={"Registrar pagos"}/>
            <form ref={form}>
                <Input type={"text"} data={"Nombre del pago"} name={"pago"}/>
                <Input type={"number"} data={"Cantidad de pago"} name={"cantidad"}/>
                <Input type={"number"} data={"Periodo de pagos"} name={"periodo"}/>
                <Boton data={"Registrar pago"} onClick={chandlerClick}/>
                <StyledLink to={"/pagos"}>Cancelar</StyledLink>
            </form>
        </Div>
    );
}

export default FormRegistrarPago;