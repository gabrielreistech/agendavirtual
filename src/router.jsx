import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import MeusAgendamentos from "./pages/Meus Agendamentos/MeusAgendamentos.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";

const Router = () => {
    return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meusagendamentos" element={<MeusAgendamentos />} />
            <Route path="/sobre" element={<Sobre />} />
         </Routes>
      </BrowserRouter>
    );
}

export default Router;