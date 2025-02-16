import { useContext, useState } from "react";
import styles from "./Card.module.css";
import { MyContext } from "../../Context/MeusAgendamentos";

const Card = (props) => {
  const { id, name, date, time, description } = props;

  const { handleDelete, handleUpdate } = useContext(MyContext);

  const [isEditing, setIsEditing] = useState(false);

  const [updatedData, setUpdatedData] = useState({
    name,
    date,
    time,
    description,
  });

  // Função que lida com as mudanças nos campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    handleUpdate(id, updatedData); 
    setIsEditing(false); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {isEditing ? (
          
          <div className={styles.editForm}>
            <input
              type="text"
              name="name"
              value={updatedData.name}
              onChange={handleInputChange}
              placeholder="Nome do Agendamento"
            />
            <input
              type="date"
              name="date"
              value={updatedData.date}
              onChange={handleInputChange}
              placeholder="Data"
            />
            <input
              type="time"
              name="time"
              value={updatedData.time}
              onChange={handleInputChange}
              placeholder="Hora"
            />
            <input
              type="text"
              name="description"
              value={updatedData.description}
              onChange={handleInputChange}
              placeholder="Descrição"
            />
            <button onClick={handleSave}>Salvar</button>
          </div>
        ) : (
          // Exibe as informações do agendamento
          <>
            <p>
              <span>Nome do Agendamento:</span> {name}
            </p>
            <p>
              <span>Data do agendamento:</span> {date || "Não foi informada nenhuma data."}
            </p>
            <p>
              <span>Horário do agendamento:</span> {time || "Não foi informado nenhum horário."}
            </p>
            <p>
              <span>Descrição sobre agendamento:</span> {description || "Não foi informada nenhuma descrição."}
            </p>
          </>
        )}
      </div>

      <div className={styles.containerBotoes}>
        <span onClick={() => handleDelete(id)} className={styles.excluir}>
          Excluir
        </span>
        <span
          onClick={() => setIsEditing(true)} 
          className={styles.alterar}
        >
          Alterar
        </span>
      </div>
    </div>
  );
};

export default Card;
