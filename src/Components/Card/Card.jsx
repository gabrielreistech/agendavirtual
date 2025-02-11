import styles from "./Card.module.css"

const Card = (props) => {
   return(
      <div className={styles.container}>
         <p>Nome do Agendamento: {props.name}</p>
         <p>Data do agendamento: {props.date ? props.date : " Não foi informada nenhuma data nesse agendamento."}</p>
         <p>Horário do agendamento: {props.time ? props.time : " Não foi informado nenhum horário nesse agendamento."}</p>
         <p>Descrição sobre agendamento: {props.description ? props.description : " Não foi informada nenhuma descrição nesse agendamento."}</p>
      </div>   
   );
}

export default Card;