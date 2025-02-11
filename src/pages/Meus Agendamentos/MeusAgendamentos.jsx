import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header"

const MeusAgendamentos = ({value}) => {
   return(
      <>
        <Header />
        {value.map((dados, index) => {
         <Card key={index} props={value} />
        })}
        <Footer />
      </>   
   );
}

export default MeusAgendamentos;