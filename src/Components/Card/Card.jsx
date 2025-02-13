import styles from "./Card.module.css"

const Card = (props) => {

   return(
      <div className={styles.container}>
         <p><span>Nome do Agendamento:</span> {props.name}</p>
         <p><span>Data do agendamento:</span> {props.date ? props.date : " Não foi informada nenhuma data nesse agendamento."}</p>
         <p><span>Horário do agendamento:</span> {props.time ? props.time : " Não foi informado nenhum horário nesse agendamento."}</p>
         <p><span>Descrição sobre agendamento:</span> {props.description ? props.description : " Não foi informada nenhuma descrição nesse agendamento."}</p>
      </div>   
   );
}

export default Card;