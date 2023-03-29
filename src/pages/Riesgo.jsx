import styled from 'styled-components';
import HeaderS from "../components/molecules/HeaderStatic";
import FormCenterB from '../components/organims/FormCenterB';
import InputW from '../components/atoms/InputW';
import Botonlink from '../components/atoms/Botonlink';
import CuatroFormCenterB from '../components/atoms/CuatroFormCenterB';
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

function Riesgo() {
    return (
        <Div>
            <HeaderS title={"Riesgo empresarial"}/>
            <FormCenterB contentF={<>
                <InputW data={"Riesgo Cercano"} type={'text'} name={"riesgoC"}/>
                <InputW data={"Impacto Economico"} type={'number'} name={"impactoE"}/>
                <InputW data={"Numero de lugares Afectados "} type={'lugaresA'} name={"mesV"}/>
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

export default Riesgo;