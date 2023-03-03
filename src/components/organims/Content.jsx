import styled from 'styled-components';
import InformationD from "../molecules/InformationD"
import InformationI from '../molecules/InformationI';
import Crecimiento from "../../assets/img/Humans.png";
import Metas from "../../assets/img/Allura.png";
import Pagos from "../../assets/img/Pagos.png";
import Ventas from "../../assets/img/Ventas.png";
import Produccion from "../../assets/img/Produccion.png";
import Model from "../../assets/img/Model.png";
import Almacen from "../../assets/img/Almacen.png";
import Riesgo from "../../assets/img/Riesgo.png";
import Maquinas from "../../assets/img/Maquinas.png";

const StyledInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap:nowrap;
`;

function Content() {
    return (
        <StyledInformation>
            <InformationD container={"Information"} title={"Crecimiento facil y rapido"} msn={"Has que tus negocios crezcan rápido con un mejor control de sus gastos e ingresos que generas además de tener un una serie de consejos para aumentar tus ingresos y disminuir tus gastos, tomando en cuenta todos los datos y un mejor campo visual."} img={Crecimiento}/>

            <InformationI container={"Information"} title={"Metas"} msn={"Mira con claridad todo el resultado de todo tu esfuerzo por medio de  una grafica en la que te mostrara que tu meta ya no es imposible. "} img={Metas}/>
            
            <InformationD container={"Information"} title={"Pagos"} msn={"Olvídate de tener esas vergonzosas conversaciones por olvidarte pagar cualquier cosa, con una cómoda lista ordenando los pagos más cercanos para que te puedas preparar."} img={Pagos} />
            
            <InformationI container={"Information"} title={"Ventas"} msn={"Observa como tus productos son cada vez mas o menos vendidos, gracias a una comoda grafica, de esta forma si tus ventas baján podras hacer algo antes que sea tarde."} img={Ventas}/>
            
            <InformationD container={"Information"} title={"Producción"} msn={"Verifica si el dinero que inviertes para crear un producto es rentable con respecto a tus ventas, con una cómoda grafica y poder hacer algo si el costo de producción no es rentable."} img={Produccion}/>
            
            <InformationI container={"Information"} title={"Modelo de negocio"} msn={"¿Sin ideas de que modelo de negocio usar? The Easy Financy te da una gran variedad de estos para que puedas elegir cual de todos puedes usar."} img={Model}/>
            
            <InformationD container={"Information"} title={"Almacenamiento"} msn={"Olvida tener que contar producto por producto para saber que productos aun tienes disponibles y cuales ya sean agotado, ahora con The Easy Financy podras tener todo eso a la mano y con precionar un boton elimina la cantidad de productos que sean ventido."} img={Almacen}/>

            <InformationI container={"Information"} title={"Riesgo empresarial"} msn={"Ten el control de los riesgos empresariales de tu empresa, para que puedas hacer algo antes de que sufras las consecuencias o incluso antes de que pase."} img={Riesgo}/>
            
            <InformationD container={"Information"} title={"Maquinas"} msn={"¿Problemas con recordar que maquinas necesitan mantenimiento y cuando? Gracias a The Easy Financy ya no tendrás ese problema, ya que te ofrece una cómoda lista en que podrás ver los mantenimientos mas cercanos."} img={Maquinas}/>
        </StyledInformation>
    );
}

export default Content;