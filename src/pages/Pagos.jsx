import HeaderS from '../components/molecules/HeaderStatic';
import ContentPago from '../components/organims/ContentPagos';
import MenuLink from '../components/atoms/MenuLink';
import Footer from '../components/molecules/Footer';

function Pagos() {
    return (
        <div>
            <HeaderS title={"Pagos realizados"}
                links={<>
                    <MenuLink link={"/datos"} data={'Registrar producto'}/>
                    <MenuLink link={"/produccion"} data={'Registrar producción'}/>
                    <MenuLink link={"/rmaquina"} data={'Registrar maquina'}/>
                    <MenuLink link={"/riesgo"} data={'Registrar riesgo'}/>
                    <MenuLink link={"/registrarpago"} data={'Registrar pago'}/>
                    <MenuLink link={"/rmeta"} data={'Registrar meta'}/>
                    <MenuLink link={"/grafica"} data={'Dashboard'}/>
                    <MenuLink link={"/venta"} data={'Ventas'}/>
                    <MenuLink link={"/almacen"} data={'Almacen'}/>
                    <MenuLink link={"/maquina"} data={'Maquina'}/>
                    <MenuLink link={"/meta"} data={'Metas'}/>
                </>}
            />
                <ContentPago/>
            <Footer/>
        </div>
    );
}

export default Pagos;