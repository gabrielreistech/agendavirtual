import { useContext } from "react";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"
import { MyContext } from "../../Context/MeusAgendamentos";
import styles from "./MeusAgendamentos.module.css"

const MeusAgendamentos = () => {

   const{agendamento} = useContext(MyContext);

   return(
      <>
      <Header />
      <h1>Total de meus agendamentos: {agendamento.length}</h1>
      <div className={styles.box}>
         {agendamento.slice().reverse().map((dados, index) => (
             <Card key={index} {...dados} />
         ))
         }
      </div>
      
      <Footer />
   </> 
   );
}

export default MeusAgendamentos;