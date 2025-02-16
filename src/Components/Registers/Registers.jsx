import styles from "./Registers.module.css";
import DataWithFilterRecent from "../DataWithFilter/DataWithFilterRecent";

const Registers = () => {
   
   return(

      <div className={styles.container}>
          
          <div className={styles.titulo}>
             <h2>Meus agendamentos recentes</h2>
          </div>

          <DataWithFilterRecent />
          
      </div>
   );
}

export default Registers;