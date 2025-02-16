import { useContext } from "react";
import styles from "./NewRegister.module.css";
import { useForm } from "react-hook-form"; 
import { MyContext } from "../../Context/MeusAgendamentos";

const NewRegister = () => {

    const{register, handleSubmit, reset, formState:{ errors }} = useForm();
    const{handleAdd} = useContext(MyContext);

    const onSubmit = (data) => {
        handleAdd(data);
        reset();
    }

    return(
      <div className={styles.container}>

       <h2>Cadastre um novo agendamento</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

            <div className={styles.formNome}>
                <label htmlFor="name">Nome do Agendamento:</label>
                <input 
                id="name" 
                type="text" 
                placeholder="Nome do seu agendamento" 
                {...register('name',{required:'Esse campo é obrigatório!'})}
                />
            </div>

              {errors.name && <span className={styles.errors}>{errors.name.message}</span>}

            <div className={styles.formDate}>
                <label htmlFor="date">Escolha a data:</label>
                <input id="date" type="date" 
                {...register('date')}
                />
            </div>

            <div className={styles.formTime}>
                <label htmlFor="time">Escolha o horário:</label>
                <input id="time" type="time" 
                {...register('time')}
                />
            </div>

            <div className={styles.formDescription}>
                <label htmlFor="description">Faça uma descrição sobre o agendamento:</label>
                <textarea id="description" type="text"
                {...register('description')}
                placeholder="Faça uma descrição sobre seu agendamento" />
            </div>

            <div className={styles.button}>
              <button type="submit">Criar Agendamento</button>
           </div>
        </form>
      </div>
      
    );
}
export default NewRegister;