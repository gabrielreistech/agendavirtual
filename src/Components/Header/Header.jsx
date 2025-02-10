import styles from "./Header.module.css"

const Header = () => {
    return(
  
        <div className={styles.container}>
          <h1>Agenda Virtual</h1>

          <header>
            <ul>
                <li>Home</li>
                <li>Meus Agendamentos</li>
                <li>Sobre</li>
            </ul>
          </header>

        </div>
    );
}

export default Header;