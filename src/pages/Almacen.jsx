import HeaderS from "../components/molecules/HeaderStatic";
import Tabla from "../components/molecules/Tabla";
import MenuLink from "../components/atoms/MenuLink";
import Footer from "../components/molecules/Footer";

function Almacen() {
    return (
        <>
            <HeaderS title={"Almacenamiento"}
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
                    <MenuLink link={"/maquina"} data={'Maquina'}/>
                    <MenuLink link={"/meta"} data={'Metas'}/>
                </>}
            />
            <Tabla columna={(<><td><th className="th1"><p>Hamburgesa</p></th><th className="th2"><p>10</p></th></td><td><th className="th1"><p>HotCake</p></th><th className="th2"><p>11</p></th></td><td><th className="th1"><p>HotDog</p></th><th className="th2"><p>12</p></th></td></>)} placeholder={"Buscar producto"}/>
            <Footer/>
        </>
    );
}

export default Almacen;