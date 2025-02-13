import { useContext } from "react";
import styles from "./Registers.module.css";
import { SearchContext } from "../../Context/Search";
import DataWithFilter from "../FiltroSearch/DataWithFilter";

const Registers = ({dados}) => {

   const{search} = useContext(SearchContext);
   
   return(

      <div className={styles.container}>
          
          <div className={styles.titulo}>
             <h2>Meus agendamentos recentes</h2>
          </div>

          <DataWithFilter search={search} dados={dados} />
          
      </div>
   );
}

export default Registers;