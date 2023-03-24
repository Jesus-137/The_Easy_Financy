import styled from 'styled-components';
import { useRef, useState } from "react";
import Input from '../atoms/Input';
import Boton from '../atoms/Boton';
import StyledLink from '../atoms/Link';
import Parrafo from '../atoms/Parrafo';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
`;

function FormRiesgo() {
    const form = useRef();
    const [state, setState]= useState();
    const handlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current)
        if (newForm.get('riesgo')==''){
            setState('El campo "Riesgo cercano" no puede estar vacio')
        }else if(newForm.get('inpacto')==''){
            setState('El campo "Impacto economico" no puede estar vacio')
        }else if(newForm.get('lugares')==''){
            setState('El campo "Numero de Lugares afectados" no puede estar vacio')
        }else {
            setState('')
        }
    }
    return (
        <Div>
            <form ref={form}>
                <Input type={"text"} data={"Riesgo cercano"} name={"riesgo"}/>
                <Input type={"number"} data={"Impacto economico"} name={"inpacto"}/>
                <Input type={"number"} data={"Numero de Lugares afectados"} name={"lugares"}/>
                <Boton data={"Registrar"} onClick={handlerClick}/>
                <StyledLink to={"/meta"}>
                    <Boton data={"Metas"}/>
                </StyledLink>
                <Parrafo msn={state}/>
            </form>
        </Div>
    );
}

export default FormRiesgo;