import {createContext, useState } from "react";
import Home from "../pages/Home/Home";

const MyContext = createContext();  

const MeusAgendamentosContext = ({children}) => {

    const[agendamento, setAgendamento] = useState([]);

    const global = (data) => {
        setAgendamento((prevValue) => [...prevValue, data]);
    }

    return(
      <MyContext.Provider value={{agendamento, global}}>
         {children}
      </MyContext.Provider>
    );
}


export {MeusAgendamentosContext, MyContext};