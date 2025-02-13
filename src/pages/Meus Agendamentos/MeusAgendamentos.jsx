import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"
import { MyContext } from "../../Context/MeusAgendamentos";
import styles from "./MeusAgendamentos.module.css"
import { SearchContext } from "../../Context/Search";
import DataWithFilter from "../../Components/FiltroSearch/DataWithFilter";

const MeusAgendamentos = () => {

   const{agendamento} = useContext(MyContext);
   const{search} = useContext(SearchContext);

   return(
      <>
      <Header />
      <h1 className={styles.h1}>Total de meus agendamentos: {agendamento.length}</h1>
      <div className={styles.box}>
         <DataWithFilter search={search} dados={agendamento} />
      </div>
      
      <Footer />
   </> 
   );
}

export default MeusAgendamentos;