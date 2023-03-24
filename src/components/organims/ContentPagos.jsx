import SubTitle from '../atoms/Subtitle';
import InformacionPagoO from '../molecules/InformacionPagoO';
import InformacionPagoC from '../molecules/InformacionPagoC';
import StyledLink from '../atoms/Link';
import Boton from '../atoms/Boton';

function ContentPago() {
    return (
        <div>
            <SubTitle subTitle={"Pago de internet."}/>
            <InformacionPagoO cantidad={"Cantidad: $759.99"} fecha={"Fecha por pagar: 11/09/2022"}/>
            <SubTitle subTitle={"Pago de los empleados."}/>
            <InformacionPagoC cantidad={"Cantidad: $759.99"} fecha={"Fecha por pagar: 11/10/2022"}/>
            <SubTitle subTitle={"Pago de la renta."}/>
            <InformacionPagoO cantidad={"Cantidad: $759.99"} fecha={"Fecha por pagar: 11/10/2022"}/>
            <SubTitle subTitle={"pago de la luz."}/>
            <InformacionPagoC cantidad={"Cantidad: $759.99"} fecha={"Fecha por pagar: 11/10/2022"}/>
            <SubTitle subTitle={"pago del agua."}/>
            <InformacionPagoO cantidad={"Cantidad: $759.99"} fecha={"Fecha por pagar: 11/10/2022"}/>
            <StyledLink to="/venta"><Boton data={"Ventas"}/></StyledLink>
            <StyledLink to="/registrarpago"><Boton data={"Registrar pago"}/></StyledLink>
        </div>
    );
}

export default ContentPago;