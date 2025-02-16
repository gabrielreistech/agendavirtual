import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"
import { MyContext } from "../../Context/MeusAgendamentos";
import styles from "./MeusAgendamentos.module.css"
import { SearchContext } from "../../Context/Search";
import DataWithFilter from "../../Components/DataWithFilter/DataWithFilter";

const MeusAgendamentos = () => {

   const{agendamento} = useContext(MyContext);
   const{search} = useContext(SearchContext);
   const{handleDelete} = useContext(MyContext);

   return(
      <>
      <Header />
      <h1 className={styles.h1}>Total de meus agendamentos: {agendamento.length}</h1>
      <div className={styles.box}>
         <DataWithFilter search={search} handleDelete={handleDelete} />
      </div>
      
      <Footer />
   </> 
   );
}

export default MeusAgendamentos;