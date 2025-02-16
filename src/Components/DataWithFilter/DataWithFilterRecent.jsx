import { useContext } from "react";
import Card from "../Card/Card";
import { MyContext } from "../../Context/MeusAgendamentos";

const DataWithFilterRecent = ( {search} ) => {

    const {agendamento} = useContext(MyContext);

    return(
        <div>
            {search ? (agendamento.filter((dado) => dado.name.includes(search))).map((dado) => <Card key={dado.id} id={dado.id} {...dado}/>)
            : (agendamento.slice(-3).reverse().map((dado) => <Card key={dado.id} id={dado.id} {...dado} />))
            }
        </div>
    );
    
}

export default DataWithFilterRecent;