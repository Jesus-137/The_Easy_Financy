import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomeView from "../pages/HomeView";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PageUseless from "../pages/PageUseless";
import NotFound from "../pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/iniciar" element={<Login/>}/>
                <Route path="/crear" element={<PageUseless/>}/>
                <Route path="/grafica" element={<Dashboard/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;