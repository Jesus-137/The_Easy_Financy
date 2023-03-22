import { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import Boton from "../atoms/Boton";
import Parrafo from "../atoms/Parrafo";
import StyledLink from "../atoms/Link";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 380px;
    flex-wrap: nowrap;
    @media screen and (max-width: 700px) {
        width: 96%;
    }
    @media screen and (min-width: 1300px) and (max-width: 1500px){
        width: 100%;
    }
`;

function FormVenta() {
    const form = useRef();
    const [state, setState]= useState();
    const handlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current)
        if (newForm.get('folio')==''){
            setState('El campo "Folio del producto" no puede estar vacio')
        }else if(newForm.get('ventas')==''){
            setState('El campo "Ventas por mes" no puede estar vacio')
        }else if(newForm.get('mes')==''){
            setState('El campo "Mes" no puede estar vacio')
        }else {
            setState('')
        }
    }

    return (
        <>
            <StyledForm ref={form}>
                <Input data={"Folio del producto"} type={"number"} name={"folio"}/>
                <Input data={"Ventas por mes"} type={"number"} name={"ventas"}/>
                <Input data={"Mes"} type={"number"} name={"mes"}/>
                <Boton type={"button"} onClick={handlerClick} data={"Registrar"}/>
                <StyledLink to={"/grafica"}>
                    <Boton data={"Dasboard"}/>
                </StyledLink>
                <Parrafo msn={state}/>
            </StyledForm>
        </>
    );
}

export default FormVenta;