import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from "react";
import RouteProtected from "./RouterProtected";
import UserContext from "../context/UserContext";
import HomeView from "../pages/HomeView";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecuperarCuenta from "../pages/RecuperarCuenta";
import CorreoMandado from "../pages/CoreoMandado";
import Dashboard from "../pages/Dashboard";
import Ventas from "../pages/Ventas";
import Almacen from "../pages/Almacen";
import Metas from "../pages/Metas";
import Pagos from "../pages/Pagos";
import NotFound from "../pages/NotFound";
import PageUseless from "../pages/PageUseless";//mailbox.js.org

function App() {
    const [isLoged, setIsLoged] = useState(false)
    return (
        <BrowserRouter>
            <UserContext.Provider value={{isLoged, setIsLoged}}>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/iniciar" element={<Login/>}/>
                    <Route path="/crear" element={<Register/>}/>
                    <Route path="/recuperar" element={<RecuperarCuenta/>}/>
                    <Route path="/correo" element={<CorreoMandado/>}/>
                    <Route element={<RouteProtected session={isLoged}/>}>
                        <Route path="/grafica" element={<Dashboard/>}/>
                        <Route path="/venta" element={<Ventas/>}/>
                        <Route path="/meta" element={<Metas/>}/>
                        <Route path="/pagos" element={<Pagos/>}/>
                    </Route>
                    <Route path="/construccion" element={<PageUseless/>}/>
                    <Route path="/almacen" element={<Almacen/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;