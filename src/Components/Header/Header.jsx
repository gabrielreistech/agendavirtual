import styles from "./Header.module.css"
import {Link} from "react-router-dom"

const Header = () => {
    return(
  
        <div className={styles.container}>

          <h1><Link to="/">Agenda Virtual</Link></h1>

          <div className={styles.input}>
            <input type="text" placeholder="Busque por seus agendamentos"/>
          </div>
          
          <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/meusagendamentos">Meus Agendamentos</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </header>

        </div>
    );
}

export default Header;