import styled from 'styled-components';
import SubTitle from '../atoms/Subtitle';
import InformacionPagoO from '../molecules/InformacionPagoO';
import InformacionPagoC from '../molecules/InformacionPagoC';

const Div = styled.div`
  /* ... */
`;

function ContentPago() {
    return (
        <Div>
            <SubTitle subTitle={"Pago internet"}/>
            <InformacionPagoO cantidad={"Cantidad: $759.99"} fecha={"Fecha por pagar: 11/09/2022"}/>
            <SubTitle subTitle={"Pago de los empleados"}/>
            <InformacionPagoC cantidad={"Cantidad: $759.99"} fecha={"Fecha por pagar: 11/10/2022"}/>
        </Div>
    );
}

export default ContentPago;