import styled from 'styled-components';
import HeaderS from '../components/molecules/HeaderStatic';
import ContentDash from '../components/organims/ContentDash';
import MenuLink from '../components/atoms/MenuLink';
import Footer from '../components/molecules/Footer';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2% 0;
    @media screen and (min-width: 320px) and (max-width: 700px){
        flex-direction: column;
    }
`;

function Dashboard() {
    return (
        <>
            <HeaderS title={"Dashboard"} links={<>
                <MenuLink link={"/pagos"} data={'Pagos'}/>
                <MenuLink link={"/venta"} data={'Ventas'}/>
                <MenuLink link={"/datos"} data={'Registrar producto'}/>
                <MenuLink link={"/produccion"} data={'Registrar producción'}/>
                <MenuLink link={"/rmaquina"} data={'Registrar maquina'}/>
                <MenuLink link={"/riesgo"} data={'Registrar riesgo'}/>
                <MenuLink link={"/registrarpago"} data={'Registrar pago'}/>
                <MenuLink link={"/meta"} data={'Registrar meta'}/>
                <MenuLink link={"/almacen"} data={'Almacen'}/>
                <MenuLink link={"/maquina"} data={'Maquina'}/>
            </>}/>
            <Div>
                <ContentDash/>
            </Div>
            <Footer/>
        </>
    );
}

export default Dashboard;