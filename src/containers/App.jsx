import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomeView from "../pages/HomeView";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecuperarCuenta from "../pages/RecuperarCuenta";
import CorreoMandado from "../pages/CoreoMandado";
import Dashboard from "../pages/Dashboard";
import Ventas from "../pages/Ventas";
import Pagos from "../pages/Pagos";
import NotFound from "../pages/NotFound";
import UserContext from "../context/UserContext";
import RouteProtected from "./RouterProtected";

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
                    </Route>
                    <Route path="/pagos" element={<Pagos/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;