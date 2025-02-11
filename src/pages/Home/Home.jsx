import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import NewRegister from "../../Components/NewRegister/NewRegister";
import Registers from "../../Components/Registers/Registers";
import styles from "./Home.module.css"
import { useState } from "react";

const Home = ({global}) => {

    const[agendamento, setAgendamento] = useState([]);
 
    const registro = (data) => {
       setAgendamento((agendamentos) => { 
        const AgendamentosTotais = [...agendamentos, data];
        global(AgendamentosTotais);
        return AgendamentosTotais.slice(-3);
       })
  }

    return(
        <>
          <Header />
            <div className={styles.container}>
             <NewRegister sendData={registro} />
             <Registers dados={agendamento} />
            </div>
          <Footer />
        </>
    );
}

export default Home;
