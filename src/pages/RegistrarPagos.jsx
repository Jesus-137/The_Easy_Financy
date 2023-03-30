import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormC2 from '../components/organims/FromC2';
import Title from '../components/atoms/Title';
import Image from '../components/atoms/ImageSmall';
import InputW from '../components/atoms/InputW';
import Boton from '../components/atoms/BotonF';
import Parrafo from '../components/atoms/Parrafo';
import Link from '../components/atoms/Link'
import CuatroFormC from '../components/atoms/CuatroFromC';
import logo from '../assets/img/TEF.png';

function RecuperarCuenta() {
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([]);
    const endpoint = 'http://34.203.93.42/pagos/create'

    const chandlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current);
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre_pago: newForm.get('nombreP'),
                cantidad_pago: newForm.get('cantidadP'),
                periodo_pago: newForm.get('periodoP'),
            })
        }
        const valors=JSON.parse(options.body)

        if (valors.nombre_pago==''){
            setState('El campo "Nombre  del pago" no puede estar vacio')
        }else if(valors.cantidad_pago==''){
            setState('El campo "Cantidad del pago" no puede estar vacio')
        }else if(valors.periodo_pago==''){
            setState('El campo "Periodo de pago" no puede estar vacio')
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
        <FormC2 form={form} msn={<>
                <Image img={logo}/>
                <Title title={"Pagar"}/>
            </>}
            contentF={<>
                <InputW data={"Nombre del pago"} type={'text'} name={'nombreP'}/>
                <InputW data={"Cantidad del  pago"} type={'number'} name={'cantidadP'}/>
                <InputW data={"Periodo de Pago"} type={'number'} name={'periodoP'}/>
                <Boton data={"enviar"} onClick={chandlerClick}/>
                <Link to={"/grafica"}>Regresar</Link>
                <Parrafo msn={state}/>
            </>}
            cuatro={
                <CuatroFormC/>
            }
        />
    );
}

export default RecuperarCuenta;