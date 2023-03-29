import HeaderS from "../components/molecules/HeaderStatic";
import Tabla from "../components/molecules/Tabla";
import Footer from "../components/molecules/Footer";

function Maquina() {
    return (
        <>
            <HeaderS title={"Maquinas vista"}/>
            <Tabla placeholder={"Buscar Maquina"} columna={(<><td><th className="th1"><p>Horno</p></th><th className="th2"><p>27/01/2023</p></th></td><td><th className="th1"><p>Estufa</p></th><th className="th2"><p>28/02/2023</p></th></td><td><th className="th1"><p>Microondas</p></th><th className="th2"><p>15/04/2023</p></th></td><td><th className="th1"><p>Refigerador</p></th><th className="th2"><p>15/07/2023</p></th></td></>)}/>
            <Footer/>
        </>
    );
}

export default Maquina;