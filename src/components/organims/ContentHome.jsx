import styled from 'styled-components';
import Information from '../molecules/InformationI';
import Carusel from '../atoms/Carusel';
import Afil from "../../assets/img/Women.svg";
import Sub from "../../assets/img/Stuck.svg";
import Fran from "../../assets/img/40401.svg";

const StyledInformation = styled.div`
    padding: 16% 2% 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap:nowrap;
    text-align: justify;
    @media screen and (max-width: 800px){
        padding-top: 20%;
    }
`;

function ContentHome() {
    return (
        <StyledInformation>
            <Carusel/>
            <Information container={"Information"} title={"Modelo de negocio de suscripción"} msn={"Este modelo de negocio de suscripción está enfocado en la generación de ingresos de una forma repetitiva, donde el cliente adquiere el producto o servicio periódicamente, por ejemplo Microsoft con Game Pass."} img={Sub}/>
            <Information container={"Information"} title={"Modelo de negocio afiliación"} msn={"Este modelo de afiliación se aplica en el comercio online, al igual que la tradicional venta por comisión, esto funciona cuando un sitio web redirecciona al lector a otro sitio web (normalmente una tienda online) donde se realiza una serie de acciones (ya sea un registro o una compra) el sitio web que envía el tráfico recibe una compensación monetaria, por ejemplo Amazon."} img={Afil}/>
            <Information container={"Information"} title={"Modelo de negocio de franquicia o licencia"} msn={"Generalmente, la franquicia se realiza bajo contrato y puntualizando claramente las responsabilidades de ambas partes, la franquicia cede el uso de su marca y la transferencia de sus conocimientos tanto técnicos como administrativos, por otro lado, el franquiciado debe cumplir todos los estándares de calidad y entrenarse de manera adecuada, dando un buen uso de la marca, por ejemplo Burger King."} img={Fran}/>
        </StyledInformation>
    );
}

export default ContentHome;