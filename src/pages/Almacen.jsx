import HeaderS from "../components/molecules/HeaderStatic";
import TablaAlmacen from "../components/molecules/TablaAlmacen";
import Footer from "../components/molecules/Footer";

function Almacen() {
    return (
        <>
            <HeaderS title={"Almacenamiento"}/>
            <TablaAlmacen columna={(<><td><th className="th1"><p>Hamburgesa</p></th><th className="th2"><p>10</p></th></td><td><th className="th1"><p>HotCake</p></th><th className="th2"><p>11</p></th></td><td><th className="th1"><p>HotDog</p></th><th className="th2"><p>12</p></th></td></>)}/>
            <Footer/>
        </>
    );
}

export default Almacen;