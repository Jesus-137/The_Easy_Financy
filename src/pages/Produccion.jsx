import styled from 'styled-components';
import HeaderS from '../components/molecules/HeaderStatic';
import FormCenterB from '../components/organims/FormCenterB';
import InputW from '../components/atoms/InputW';
import Botonlink from '../components/atoms/Botonlink';
import CuatroFormCenterB from '../components/atoms/CuatroFormCenterB';
import Footer from '../components/molecules/Footer';

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

function Produccion() {
    return (
        <Div>
            <HeaderS title={"Produccion"}/>
            <FormCenterB contentF={<>
                <InputW data={"Costo Por dia"} type={'number'} name={"costoD"}/>
                <InputW data={"Cantidad producida"} type={'number'} name={"cantidaHecha"}/>
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

export default Produccion;