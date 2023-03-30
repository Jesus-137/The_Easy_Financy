import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderS from "../components/molecules/HeaderStatic";
import FormCenterB from "../components/organims/FormCenterB";
import InputW from "../components/atoms/InputW";
import Botonlink from "../components/atoms/Botonlink";
import Parrafo from '../components/atoms/Parrafo';
import CuatroFormCenterB from "../components/atoms/CuatroFormCenterB";
import MenuLink from '../components/atoms/MenuLink';
import Footer from "../components/molecules/Footer";

const Div = styled.div`
    .btn{
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        padding: 0;
        padding: 0;
    }
`;


function RMaquina() {
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([]);
    const endpoint = 'http://34.203.93.42/maquina/create'

    const chandlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current);
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                folio: newForm.get('folioM'),
                nombre_maquina: newForm.get('nombreM'),
                fecha_mantenimiento: newForm.get('fechaUltimoMan'),
            })
        }
        const valors=JSON.parse(options.body)

        if (valors.folio==''){
            setState('El campo "Folio" no puede estar vacio')
        }else if(valors.nombre_maquina==''){
            setState('El campo "Nombre de la maquina" no puede estar vacio')
        }else if(valors.fecha_mantenimiento==''){
            setState('El campo "Fecha del ultimo mantenimiento" no puede estar vacio')
        }else{
            fetch(endpoint, options) 
            .then(response => response.json())
            .then(data => {
                if (data.status!=false){
                    navigate('/grafica')
                }else{
                    alert(data.message)
                }
            })
        }
    }
    return (
        <Div>
            <HeaderS title={"Maquinas"}
                links={<>
                    <MenuLink link={"/datos"} data={'Registrar producto'}/>
                    <MenuLink link={"/produccion"} data={'Registrar producción'}/>
                    <MenuLink link={"/riesgo"} data={'Registrar riesgo'}/>
                    <MenuLink link={"/registrarpago"} data={'Registrar pago'}/>
                    <MenuLink link={"/rmeta"} data={'Registrar meta'}/>
                    <MenuLink link={"/grafica"} data={'Dashboard'}/>
                    <MenuLink link={"/pagos"} data={'Pagos'}/>
                    <MenuLink link={"/venta"} data={'Ventas'}/>
                    <MenuLink link={"/almacen"} data={'Almacen'}/>
                    <MenuLink link={"/maquina"} data={'Maquina'}/>
                    <MenuLink link={"/meta"} data={'Metas'}/>
                </>}
            />
            <FormCenterB form={form} contentF={<>
                <InputW data={"Folio"} type={'number'} name={"folioM"}/>
                <InputW data={"Nombre de la Maquina"} type={'text'} name={"nombreM"}/>
                <InputW data={"Fecha del ultimo mantenimiento"} type={'text'} name={"fechaUltimoMan"}/>
                <div className='btn'>
                    <Botonlink data={"Registrar"} onclick={chandlerClick}/>
                    <Botonlink data={"Dashboard"} link={"/"}/>
                </div>
                <Parrafo msn={state}/>
            </>}
            cuatro={
                <CuatroFormCenterB/>
            }
            />
            <Footer/>
        </Div>
    );
}

export default RMaquina;