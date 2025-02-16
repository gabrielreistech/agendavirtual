import {createContext, useState } from "react";

const MyContext = createContext();  

const MeusAgendamentosContext = ({children}) => {

    const[agendamento, setAgendamento] = useState([]);

    const handleAdd = (data) => {
        const newData = { ...data, id: Date.now() };  // Garante um id único com Date.now()
        setAgendamento((prevValue) => [...prevValue, newData]);
      };

    const handleDelete = (id) => {
        const deleteAgendamentos = agendamento.filter((dado) => dado.id !== id);
        setAgendamento(deleteAgendamentos);
     }

    const handleUpdate = (id, updateData) => {
      const updateAgendamentos = agendamento.map((dado) => 
      dado.id === id ? {...dado, ...updateData} : dado);

      setAgendamento(updateAgendamentos);
    }

    return(
      <MyContext.Provider value={{agendamento, handleAdd, handleDelete, handleUpdate}}>
         {children}
      </MyContext.Provider>
    );
}


export {MeusAgendamentosContext, MyContext};