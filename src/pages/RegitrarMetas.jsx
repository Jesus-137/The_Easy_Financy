import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderS from '../components/molecules/HeaderStatic';
import FormCenterB from '../components/organims/FormCenterB';
import InputW from '../components/atoms/InputW';
import Parrafo from '../components/atoms/Parrafo';
import Botonlink from '../components/atoms/Botonlink';
import CuatroFormCenterB from '../components/atoms/CuatroFormCenterB';
import MenuLink from '../components/atoms/MenuLink';
import Footer from '../components/molecules/Footer';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    .btn{
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        padding: 0;
        @media screen and (min-width: 320px) and (max-width: 700px){
            flex-direction: column;
        }
    }
`;

function RMetas() {
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([]);
    const endpoint = 'http://34.203.93.42/meta/create'

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
                dinero_alcanzar: newForm.get('alcanzarM'),
                fecha_ultimo_mantenimiento: newForm.get('fechaM'),
            })
        }
        const valors=JSON.parse(options.body)

        if (valors.folio==''){
            setState('El campo "Folio" no puede estar vacio')
        }else if(valors.dinero_alcanzar==''){
            setState('El campo "Dinero por Alcanzar" no puede estar vacio')
        }else if(valors.fecha_ultimo_mantenimiento==''){
            setState('El campo "Fecha" no puede estar vacio')
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
            <HeaderS title={"Metas"}
                links={<>
                    <MenuLink link={"/datos"} data={'Registrar producto'}/>
                    <MenuLink link={"/produccion"} data={'Registrar producción'}/>
                    <MenuLink link={"/rmaquina"} data={'Registrar maquina'}/>
                    <MenuLink link={"/riesgo"} data={'Registrar riesgo'}/>
                    <MenuLink link={"/registrarpago"} data={'Registrar pago'}/>
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
                <InputW data={"Dinero por Alcanzar"} type={'number'} name={"alcanzarM"}/>
                <InputW data={"Fecha"} type={'number'} name={"fechaM"}/>
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

export default RMetas;