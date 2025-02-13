import Card from "../Card/Card";

const FiltroSearch = ( {search, dados} ) => {

    return(
        <div>
            {search ? (dados.filter((dado) => dado.name.includes(search))).map((dado, index) => <Card index={index} {...dado} />)
            : (dados.slice(-3).reverse().map((dado, index) => <Card index={index} {...dado} />))
            }
        </div>
    );

}

export default FiltroSearch;