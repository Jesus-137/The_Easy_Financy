import FormC2 from '../components/organims/FromC2';
import Title from '../components/atoms/Title';
import Logo from '../components/atoms/Logo';
import InputW from '../components/atoms/InputW';
import Boton from '../components/atoms/BotonF';
import Link from '../components/atoms/Link'
import CuatroFormC from '../components/atoms/CuatroFromC';
import logo from '../assets/img/TEF.png';

function RecuperarCuenta() {
    return (
        <FormC2 msn={<>
                <Logo img={logo}/>
                <Title title={"Pagar"}/>
            </>}
            contentF={<>
                <InputW data={"Correo Paypal"} type={'email'}/>
                <InputW data={"Contraseña"} type={'password'}/>
                <Boton data={"enviar"} type="button"/>
                <Link to={"/iniciar"}>Regresar</Link>
            </>}
            cuatro={
                <CuatroFormC/>
            }
        />
    );
}

export default RecuperarCuenta;