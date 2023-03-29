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
                <InputW data={"Nombre del pago"} type={'text'}/>
                <InputW data={"Cantidad del  pago"} type={'number'}/>
                <InputW data={"Periodo de Pago"} type={'number'}/>
                <Boton data={"enviar"}/>
                <Link to={"/grafica"}>Regresar</Link>
            </>}
            cuatro={
                <CuatroFormC/>
            }
        />
    );
}

export default RecuperarCuenta;