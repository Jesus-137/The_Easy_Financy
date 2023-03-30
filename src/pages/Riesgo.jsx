import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderS from "../components/molecules/HeaderStatic";
import FormCenterB from '../components/organims/FormCenterB';
import InputW from '../components/atoms/InputW';
import Botonlink from '../components/atoms/Botonlink';
import Parrafo from '../components/atoms/Parrafo';
import CuatroFormCenterB from '../components/atoms/CuatroFormCenterB';
import MenuLink from '../components/atoms/MenuLink';
import Footer from "../components/molecules/Footer";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

function Riesgo() {
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([]);
    const endpoint = 'http://34.203.93.42/riesgo/create'

    const chandlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current);
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                riesgo_cercano: newForm.get('riesgoC'),
                impacto_economico: newForm.get('impactoE'),
                numero_lugares_afectados: newForm.get('lugaresA'),
            })
        }
        const valors=JSON.parse(options.body)

        if (valors.riesgo_cercano==''){
            setState('El campo "Riesgo cercano" no puede estar vacio')
        }else if(valors.impacto_economico==''){
            setState('El campo "Impacto economico" no puede estar vacio')
        }else if(valors.numero_lugares_afectados==''){
            setState('El campo "Numero de lugares afectados" no puede estar vacio')
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
            <HeaderS title={"Riesgo empresarial"}
                links={<>
                    <MenuLink link={"/datos"} data={'Registrar producto'}/>
                    <MenuLink link={"/produccion"} data={'Registrar producción'}/>
                    <MenuLink link={"/rmaquina"} data={'Registrar maquina'}/>
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
                <InputW data={"Riesgo Cercano"} type={'text'} name={"riesgoC"}/>
                <InputW data={"Impacto Economico"} type={'number'} name={"impactoE"}/>
                <InputW data={"Numero de lugares Afectados "} type={'number'} name={"lugaresA"}/>
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

export default Riesgo;