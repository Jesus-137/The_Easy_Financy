import HeaderS from "../components/molecules/HeaderStatic";
import Tabla from "../components/molecules/Tabla";
import MenuLink from "../components/atoms/MenuLink";
import Footer from "../components/molecules/Footer";

function Maquina() {
    return (
        <>
            <HeaderS title={"Maquinas vista"}
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
                    <MenuLink link={"/meta"} data={'Metas'}/>
                </>}
            />
            <Tabla placeholder={"Buscar Maquina"} columna={(<><td><th className="th1"><p>Horno</p></th><th className="th2"><p>27/01/2023</p></th></td><td><th className="th1"><p>Estufa</p></th><th className="th2"><p>28/02/2023</p></th></td><td><th className="th1"><p>Microondas</p></th><th className="th2"><p>15/04/2023</p></th></td><td><th className="th1"><p>Refigerador</p></th><th className="th2"><p>15/07/2023</p></th></td></>)}/>
            <Footer/>
        </>
    );
}

export default Maquina;