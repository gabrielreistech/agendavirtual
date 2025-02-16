import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>

                <div className={styles.data}>
                    <ul>
                      <li>2025 Agenda Virtual. Todos os direitos reservados.</li>
                      <li><strong>Email:</strong> gabrielreistech@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
