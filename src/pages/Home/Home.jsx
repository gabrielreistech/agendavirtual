import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import NewRegister from "../../Components/NewRegister/NewRegister";
import Registers from "../../Components/Registers/Registers";
import styles from "./Home.module.css"
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../Context/MeusAgendamentos";

const Home = () => {

    const{agendamento, global} = useContext(MyContext);
 
    const registro = (data) => {
      global(data);
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
