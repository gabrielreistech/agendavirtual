import styles from "./Header.module.css"
import {Link} from "react-router-dom"
import { SearchContext } from "../../Context/Search";
import { useContext } from "react";

const Header = () => {
  
  const{setSearch} = useContext(SearchContext);


  const handleOnChange = (e) => {
    setSearch(e.target.value);
  }
  
  return(
  
        <div className={styles.container}>

          <h1><Link to="/">Agenda Virtual</Link></h1>

          <div className={styles.input}>
            <input id="search" type="text" placeholder="Digite sua pesquisa" onChange={handleOnChange}/>
            <span className={styles.emoji}>🔍</span>
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