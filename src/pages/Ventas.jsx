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

function Ventas() {
    return (
        <Div>
            <HeaderS title={"Ventas"}/>
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