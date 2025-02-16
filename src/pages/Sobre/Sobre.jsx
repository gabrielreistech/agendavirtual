import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styles from "./Sobre.module.css"

const Sobre = () => {
   return (
      <>
         <Header />
         <div className={styles.container}>

            <section className={styles.sobre}>
               <h2>Sobre o Projeto</h2>
               <p>
                  <strong>Agenda Virtual</strong> é uma ferramenta online simples e prática, desenvolvida para facilitar o gerenciamento e organização de seus compromissos diários. Com um design intuitivo e funcionalidades eficientes, ela permite que você adicione, edite e exclua agendamentos rapidamente, tudo em um único lugar.
               </p>

               <h3>Funcionalidades principais:</h3>
               <ul>
                  <li><strong>Adicionar Agendamentos:</strong> Crie novos agendamentos facilmente, inserindo informações como nome, data, horário e descrição.</li>
                  <li><strong>Edição Rápida:</strong> Alterar os detalhes de um agendamento nunca foi tão simples! Modifique qualquer dado e salve suas alterações.</li>
                  <li><strong>Excluir Agendamentos:</strong> Remova compromissos que não são mais necessários com apenas um clique.</li>
                  <li><strong>Pesquisa Eficiente:</strong> Encontre rapidamente agendamentos específicos usando o campo de pesquisa.</li>
               </ul>

               <h3>Objetivo:
                  
               </h3>
               <p>
                  A <strong>Agenda Virtual</strong> foi criada com o objetivo de ajudar a otimizar sua rotina, mantendo todos os seus compromissos organizados e acessíveis de maneira rápida e eficiente. Seja para o uso pessoal ou profissional, a agenda proporciona a flexibilidade necessária para um gerenciamento de tempo eficaz.
               </p>

               <p>Comece agora a organizar sua agenda de forma prática e sem complicação!</p>
            </section>
         </div>

         <Footer />
      </>
   );
}
export default Sobre;