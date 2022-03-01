import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {  //pokemon comes from pokemonPage. It is an array of pokemon objects
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((pokemon) => {   // we are mapping over the pokemon array and sending the pokemon obj info to pokemonCard
        return (
          <PokemonCard 
            key = {pokemon.id}
            name = {pokemon.name}
            hp = {pokemon.hp}
            sprites = {pokemon.sprites}
          />
        )
      })}
     
    </Card.Group>
  );
}

export default PokemonCollection;
