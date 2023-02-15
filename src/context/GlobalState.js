import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/url";
import { GlobalContext } from "./GlobalContext";


const GlobalState = (props) => {

    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetchPokelist();
    }, []);

    const fetchPokelist = async () => {
        try {
            const response = await axios.get(BASE_URL);
            setPokelist(response.data.results);
        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error.response);
        }
    };

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );

        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex);
        }
    };

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );

        setPokedex(newPokedex);
    };

    //passando informações para o value do provider atravez do objeto
    const context = {
        pokelist,
        pokedex,
        addToPokedex,
        removeFromPokedex
    }
    //Essas informações podem ser usadas em todos os componentes que estão dentro do GlobalState no APP

    return(
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState