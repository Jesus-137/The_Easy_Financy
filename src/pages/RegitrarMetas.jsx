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
    .btn{
        justify-content: space-between;
        display: flex;
        flex-direction: row;
    }
`;

function Metas() {
    return (
        <Div>
            <HeaderS title={"Metas"} />
            <FormCenterB contentF={<>
                <InputW data={"Folio"} type={'number'} name={"folioP"}/>
                <InputW data={"Dinero por Alcanzar"} type={'number'} name={"ventaM"}/>
                <InputW data={"Fecha"} type={'number'} name={"ventaM"}/>
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

export default Metas;