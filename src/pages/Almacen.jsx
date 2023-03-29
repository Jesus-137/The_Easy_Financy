import HeaderS from "../components/molecules/HeaderStatic";
import Tabla from "../components/molecules/Tabla";
import Footer from "../components/molecules/Footer";

function Almacen() {
    return (
        <>
            <HeaderS title={"Almacenamiento"}/>
            <Tabla columna={(<><td><th className="th1"><p>Hamburgesa</p></th><th className="th2"><p>10</p></th></td><td><th className="th1"><p>HotCake</p></th><th className="th2"><p>11</p></th></td><td><th className="th1"><p>HotDog</p></th><th className="th2"><p>12</p></th></td></>)} placeholder={"Buscar producto"}/>
            <Footer/>
        </>
    );
}

export default Almacen;