import { useContext } from "react";
import Card from "../Card/Card";
import { MyContext } from "../../Context/MeusAgendamentos";
import {SearchContext} from "../../Context/Search"

const DataWithFilter = () => {

    const {agendamento, handleDelete} = useContext(MyContext);
    const {search} = useContext(SearchContext);

    return(
        <div>
            {search ? (agendamento.filter((dado) => dado.name.includes(search))).map((dado) => <Card key={dado.id} id={dado.id} {...dado} handleDelete={handleDelete}/>)
            : (agendamento.slice().reverse().map((dado) => <Card key={dado.id} id={dado.id} {...dado} handleDelete={handleDelete} />))
            }
        </div>
    );

}

export default DataWithFilter;