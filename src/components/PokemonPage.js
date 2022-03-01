import React, { useEffect, useState } from "react"; //useEffect and useState imported here
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState ([]) //this is part of fetching. it is also used to add new pokemon through form
  const [searchTerm, setSearchTerm] = useState ("") //this is part of searching and is being passed to search component

  useEffect(() => {                     // this fetches. pokemon is an array with pokemon objects
      fetch("http://localhost:3001/pokemon")
        .then((res) => res.json())
        .then(setPokemon)
  }, [])

  function handleAddPokemon(newPokemon) { // this adds a new pokemon through form and is passed to the form component
    setPokemon([...pokemon, newPokemon])
  }

  const searchedPokemon = pokemon.filter ((pokemon) =>             // this is used to search
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())  //make sure to invoke toLowerCase both times
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon = {handleAddPokemon}/>
      <br />
      <Search searchTerm = {searchTerm}   onChangeSearch = {setSearchTerm}/> 
      <br />
      <PokemonCollection 
        // pokemon = {pokemon} // pokemon array is being sent to pokemonCollection. this renders without the search fn
        pokemon = {searchedPokemon} // this renders all pokemon but also allows for searching pokemon by name and is being passed to pokemonCollection
      />
    </Container>
  );
}

export default PokemonPage;
