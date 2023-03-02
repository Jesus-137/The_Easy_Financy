import { useRef } from "react";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import Boton from "../atoms/Boton";

function FromLogin() {
    const form = useRef();

    const handerlClick=(e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }
        const valors=JSON.parse(options.body)

        if (valors.nombre==''){
            setState('El campo nombre no puede estar vacio')
        }else if (valors.usuario==''){
            setState('El campo usuario no puede estar vacio')
        }else if (valors.correo==''){
            setState('El campo correo no puede estar vacio')
        }else if (valors.contrasenia==''){
            setState('El campo contrasenia no puede estar vacio')
        }else{
            fetch(endpoint, options) 
            .then(response => response.json())
            .then(data => {
                if (data.status!=false){
                    navigate('/')
                }else{
                    alert(data.message)
                }
            })
        }
    }
    return (
        <form ref={form}>
            <Title title={"Iniciar sesion"}/>
            <Input type={"text"} name={"fristName"} data={"Nombre"}/>
            <Input type={"text"} name={"lastName"} data={"Apellidos"}/>
            <Boton onClick={handerlClick} data={"Iniciar"}/>
        </form>
    );
}

export default FromLogin;