import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderS from '../components/molecules/HeaderStatic';
import FormCenterB from '../components/organims/FormCenterB';
import InputW from '../components/atoms/InputW';
import Botonlink from '../components/atoms/Botonlink';
import MenuLink from '../components/atoms/MenuLink';
import Parrafo from '../components/atoms/Parrafo';
import CuatroFormCenterB from '../components/atoms/CuatroFormCenterB';
import Footer from '../components/molecules/Footer';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .btn{
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        padding: 0;
        @media screen and (min-width: 320px) and (max-width: 700px) {
            flex-direction: column;
        }
    }
`;

function Produccion() {
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([]);
    const endpoint = 'http://34.203.93.42/produccion/create'

    const chandlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current);
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                costo_dia: newForm.get('costoD'),
                cantidad: newForm.get('cantidaHecha'),
            })
        }
        const valors=JSON.parse(options.body)

        // alert(newForm.get('costoD'))
        if (valors.costo_dia==''){
            setState('El campo "Costo por dia" no puede estar vacio')
        }else if(valors.cantidad==''){
            setState('El campo "Cantidad producida" no puede estar vacio')
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
            <HeaderS title={"Producción"}
                links={<>
                    <MenuLink link={"/datos"} data={'Registrar producto'}/>
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
                <InputW data={"Costo Por dia"} type={'number'} name={"costoD"}/>
                <InputW data={"Cantidad producida"} type={'number'} name={"cantidaHecha"}/>
                <div className='btn'>
                    <Botonlink data={"Registrar"} onclick={chandlerClick}/>
                    <Botonlink data={"Dashboard"} link={"/grafica"}/>
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

export default Produccion;