import styled from "styled-components";
import HeaderS from "../components/molecules/HeaderStatic";
import MenuLink from "../components/atoms/MenuLink";
import FormCenterB from "../components/organims/FormCenterB";
import InputW from "../components/atoms/InputW";
import Botonlink from "../components/atoms/Botonlink";
import CuatroFormCenterB from "../components/atoms/CuatroFormCenterB";
import Footer from "../components/molecules/Footer";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .btn{
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        padding: 0;
        @media screen and (min-width: 320px) and (max-width: 700px){
            flex-direction: column;
        }
    }
`;

function Ventas() {
    return (
        <Div>
            <HeaderS title={"Ventas"}
                links={<>
                    <MenuLink link={"/datos"} data={'Registrar producto'}/>
                    <MenuLink link={"/produccion"} data={'Registrar producción'}/>
                    <MenuLink link={"/rmaquina"} data={'Registrar maquina'}/>
                    <MenuLink link={"/riesgo"} data={'Registrar riesgo'}/>
                    <MenuLink link={"/registrarpago"} data={'Registrar pago'}/>
                    <MenuLink link={"/rmeta"} data={'Registrar meta'}/>
                    <MenuLink link={"/grafica"} data={'Dashboard'}/>
                    <MenuLink link={"/pagos"} data={'Pagos'}/>
                    <MenuLink link={"/almacen"} data={'Almacen'}/>
                    <MenuLink link={"/maquina"} data={'Maquina'}/>
                    <MenuLink link={"/meta"} data={'Metas'}/>
                </>}
            />
            <FormCenterB contentF={<>
                <InputW data={"Folio del producto"} type={'number'} name={"folioP"}/>
                <InputW data={"Ventas de un mes"} type={'number'} name={"ventaM"}/>
                <InputW data={"Mes"} type={'text'} name={"mesV"}/>
                <div className='btn'>
                    <Botonlink data={"Registrar"} link={"/"}/>
                    <Botonlink data={"Dashboard"} link={"/"}/>
                </div>
            </>}
            cuatro={
                <CuatroFormCenterB/>
            }
            />
            <Footer/>
        </Div>
    );
}

export default Ventas;