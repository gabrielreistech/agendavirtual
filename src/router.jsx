import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import MeusAgendamentos from "./pages/Meus Agendamentos/MeusAgendamentos.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import { useState } from "react";

const Router = () => {

   const[valores, setValores] = useState([]);

   const global = (data) =>{
       setValores((prevValores) => [...prevValores, data]);
   }

    return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home global={global}/>} />
            <Route path="/meusagendamentos" element={<MeusAgendamentos value={valores} />} />
            <Route path="/sobre" element={<Sobre />} />
         </Routes>
      </BrowserRouter>
    );
}

export default Router;