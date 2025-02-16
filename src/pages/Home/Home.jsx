import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import NewRegister from "../../Components/NewRegister/NewRegister";
import Registers from "../../Components/Registers/Registers";
import styles from "./Home.module.css"

const Home = () => {

    return(
        <>
          <Header />
            <div className={styles.container}>
             <NewRegister />
             <Registers />
            </div>
          <Footer />
        </>
    );
}

export default Home;
