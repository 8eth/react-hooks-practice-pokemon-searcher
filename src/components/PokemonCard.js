import React, { useState } from "react"; // useState is being imported
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {  //name, hp, and sprites are coming from pokemonCollection

  const [showFront, setShowFront] = useState(true)  // this is to toggle between front and back image of pokemon obj

  function togglePokemonImage () {   // this happens on Click. img src has a ternary for this below and the fn is passed on the div
    setShowFront((showFront) => !showFront )
  }

  return (
    <Card>
      <div onClick = {togglePokemonImage}> 
        <div className="image">
          <img src = {showFront ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
