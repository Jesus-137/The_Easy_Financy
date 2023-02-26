import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomeView from "../pages/HomeView";
import PageUseless from "../pages/PageUseless";
import NotFound from "../pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/iniciar" element={<PageUseless/>}/>
                <Route path="/crear" element={<PageUseless/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;