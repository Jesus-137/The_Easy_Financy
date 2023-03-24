import styled from 'styled-components';
import InformationD from "../molecules/InformationD"
import InformationI from '../molecules/InformationI';
import Crecimiento from "../../assets/img/Humans.png";
import Metas from "../../assets/img/Allura.png";
import Pagos from "../../assets/img/Pagos.png";
import Ventas from "../../assets/img/Ventas.png";
import Carusel from '../atoms/Carusel';

const StyledInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap:nowrap;
    padding-top: 15%;
    @media screen and (max-width: 800px){
        padding-top: 20%;
    }
`;

function ContentHome() {
    return (
        <StyledInformation>
            <Carusel/>
            <InformationD container={"Information"} title={"Crecimiento facil y rapido"} msn={"Has que tus negocios crezcan rápido con un mejor control de sus gastos e ingresos que generas además de tener un una serie de consejos para aumentar tus ingresos y disminuir tus gastos, tomando en cuenta todos los datos y un mejor campo visual."} img={Crecimiento}/>
            <InformationI container={"Information"} title={"Metas"} msn={"Mira con claridad todo el resultado de todo tu esfuerzo por medio de  una grafica en la que te mostrara que tu meta ya no es imposible. "} img={Metas}/>
            <InformationD container={"Information"} title={"Pagos"} msn={"Olvídate de tener esas vergonzosas conversaciones por olvidarte pagar cualquier cosa, con una cómoda lista ordenando los pagos más cercanos para que te puedas preparar."} img={Pagos} />
            <InformationI container={"Information"} title={"Ventas"} msn={"Observa como tus productos son cada vez mas o menos vendidos, gracias a una comoda grafica, de esta forma si tus ventas baján podras hacer algo antes que sea tarde."} img={Ventas}/>
        </StyledInformation>
    );
}

export default ContentHome;