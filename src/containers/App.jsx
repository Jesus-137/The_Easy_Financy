import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomeView from "../pages/HomeView";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Ventas from "../pages/Ventas";
import PageUseless from "../pages/PageUseless";
import NotFound from "../pages/NotFound";
import UserContext from "../context/UserContext";

function App() {
    const [isLoged, setIsLoged] = useState(false)
    return (
        <BrowserRouter>
            <UserContext.Provider value={{isLoged, setIsLoged}}>
                <Routes>
                    <Route path="/" element={<HomeView/>}/>
                    <Route path="/iniciar" element={<Login/>}/>
                    <Route path="/crear" element={<PageUseless/>}/>
                    <Route path="/grafica" element={<Dashboard/>}/>
                    <Route path="/venta" element={<Ventas/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;