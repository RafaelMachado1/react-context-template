import Card from "../../components/Card/Card";
import { Container } from "./PokedexPage.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function PokedexPage() {

   //COMO USAR AS INFORMAÇÕES VINDAS DO CONTEXT

   const context = useContext(GlobalContext) 
   // informando o contexto

   const {pokedex, removeFromPokedex} = context 
   //usando os valores do context vindo do Global State

  

  return (
    <Container>
      <Header />
      <section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
