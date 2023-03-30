import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import HeaderS from "../components/molecules/HeaderStatic";
import MenuLink from "../components/atoms/MenuLink";
import FormCenterB from "../components/organims/FormCenterB";
import InputW from "../components/atoms/InputW";
import Botonlink from "../components/atoms/Botonlink";
import Parrafo from '../components/atoms/Parrafo';
import CuatroFormCenterB from "../components/atoms/CuatroFormCenterB";
import Footer from "../components/molecules/Footer";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .btn{
        justify-content: space-between;
        display: flex;
        flex-direction: row;
    }
`;

function IngresarDatos() {
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([]);
    const endpoint = 'http://34.203.93.42/producto/create'

    const chandlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current);
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre_producto: newForm.get('nombreP'),
                precio: newForm.get('precioP'),
                importe_dia: newForm.get('importeS'),
                folio: newForm.get('folioP'),
            })
        }
        const valors=JSON.parse(options.body)

        if (valors.nombre_producto==''){
            setState('El campo "Nombre del producto" no puede estar vacio')
        }else if(valors.precio==''){
            setState('El campo "Precio" no puede estar vacio')
        }else if(valors.importe_dia==''){
            setState('El campo "Importe General por dia" no puede estar vacio')
        }else if(valors.folio==''){
            setState('El campo "folio" no puede estar vacio')
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
            <HeaderS title={"Ingreso de datos"}
                links={<>
                    <MenuLink link={"/produccion"} data={'Registrar producción'}/>
                    <MenuLink link={"/rmaquina"} data={'Registrar maquina'}/>
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
                <InputW data={"Nombre del Producto"} type={'text'} name={"nombreP"}/>
                <InputW data={"Precio"} type={'number'} name={"precioP"}/>
                <InputW data={"Importe General por Dia"} type={'number'} name={"importeS"}/>
                <InputW data={"Folio"} type={'number'} name={"folioP"}/>
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

export default IngresarDatos;