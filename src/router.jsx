import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import MeusAgendamentos from "./pages/Meus Agendamentos/MeusAgendamentos.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import { SearchProvider } from "./Context/Search.jsx";
import {MeusAgendamentosContext} from "./Context/MeusAgendamentos.jsx";

const Router = () => {

    return(
    
     <MeusAgendamentosContext>
       <SearchProvider>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/meusagendamentos" element={<MeusAgendamentos />} />
            <Route path="/sobre" element={<Sobre />} />
         </Routes>
        </BrowserRouter>
       </SearchProvider>
      </MeusAgendamentosContext>  
    );
}

export default Router;