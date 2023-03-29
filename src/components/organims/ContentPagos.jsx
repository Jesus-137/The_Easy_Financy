import styled from 'styled-components';
import SubTitle from '../atoms/Subtitle';
import InformacionPagoO from '../molecules/InformacionPagoO';
import InformacionPagoC from '../molecules/InformacionPagoC';
import Botonlink from '../atoms/Botonlink';

const Div = styled.div`
    width: 90%;
    margin: 5% 5%;
    .btn{
        padding: 0;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
    }
`;

function ContentPago() {
    return (
        <Div>
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
            <div className='btn'>
                <Botonlink data={"Ventas"} link={"/"}/>
                <Botonlink data={"Registrar pago"} link={"/"}/>
            </div>
        </Div>
    );
}

export default ContentPago;