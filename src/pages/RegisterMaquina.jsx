import styled from 'styled-components';
import HeaderS from "../components/molecules/HeaderStatic";
import FormCenterB from "../components/organims/FormCenterB";
import InputW from "../components/atoms/InputW";
import Botonlink from "../components/atoms/Botonlink";
import CuatroFormCenterB from "../components/atoms/CuatroFormCenterB";
import Footer from "../components/molecules/Footer";

const Div = styled.div`
    .btn{
        justify-content: space-between;
        display: flex;
        flex-direction: row;
    }
`;


function Maquina() {
    return (
        <Div>
            <HeaderS title={"Maquinas"}/>
            <FormCenterB contentF={<>
                <InputW data={"Folio"} type={'number'} name={"folioM"}/>
                <InputW data={"Nombre de la Maquina"} type={'text'} name={"nombreM"}/>
                <InputW data={"Fecha del ultimo mantenimiento"} type={'text'} name={"fechaUltimoMan"}/>
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

export default Maquina;