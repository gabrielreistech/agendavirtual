import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import MeusAgendamentos from "./pages/Meus Agendamentos/MeusAgendamentos.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import { useContext, useState } from "react";
import {MeusAgendamentosContext} from "./Context/MeusAgendamentos.jsx";

const Router = () => {

    return(
     <MeusAgendamentosContext>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/meusagendamentos" element={<MeusAgendamentos />} />
            <Route path="/sobre" element={<Sobre />} />
         </Routes>
      </BrowserRouter>
      </MeusAgendamentosContext> 
    );
}

export default Router;