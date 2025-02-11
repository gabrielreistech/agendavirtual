import Card from "../Card/Card";
import styles from "./Registers.module.css";

const Registers = ({dados}) => {
   
   return(

      <div className={styles.container}>
          <div className={styles.titulo}>
             <h2>Meus agendamentos recentes</h2>
          </div>
          
          <div>
            {dados.map((agendamentos, index) => (
            <Card key={index} {...agendamentos} />))
            }
          </div>
      </div>
   );
}

export default Registers;