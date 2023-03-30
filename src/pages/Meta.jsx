import HeaderS from "../components/molecules/HeaderStatic";
import ContentMeta from "../components/organims/ContentMeta";
import MenuLink from "../components/atoms/MenuLink";
import Footer from "../components/molecules/Footer";

function Meta() {
    return (
        <>
            <HeaderS title={"Busqueda de metas"}
                links={<>
                    <MenuLink link={"/datos"} data={'Registrar producto'}/>
                    <MenuLink link={"/produccion"} data={'Registrar producción'}/>
                    <MenuLink link={"/rmaquina"} data={'Registrar maquina'}/>
                    <MenuLink link={"/riesgo"} data={'Registrar riesgo'}/>
                    <MenuLink link={"/registrarpago"} data={'Registrar pago'}/>
                    <MenuLink link={"/rmeta"} data={'Registrar meta'}/>
                    <MenuLink link={"/grafica"} data={'Dashboard'}/>
                    <MenuLink link={"/pagos"} data={'Pagos'}/>
                    <MenuLink link={"/venta"} data={'Ventas'}/>
                    <MenuLink link={"/almacen"} data={'Almacen'}/>
                    <MenuLink link={"/maquina"} data={'Maquina'}/>
                </>}
            />
            <ContentMeta/>
            <Footer/>
        </>
    );
}

export default Meta;