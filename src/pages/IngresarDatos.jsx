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
    }
`;

function IngresarDatos() {
    return (
        <Div>
            <HeaderS title={"Ingreso de datos"}/>
            <FormCenterB contentF={<>
                <InputW data={"Nombre del Producto"} type={'text'} name={"folioP"}/>
                <InputW data={"Precio"} type={'number'} name={"folioP"}/>
                <InputW data={"Importe General por Dia"} type={'number'} name={"folioP"}/>
                <InputW data={"Folio"} type={'number'} name={"folioP"}/>
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

export default IngresarDatos;