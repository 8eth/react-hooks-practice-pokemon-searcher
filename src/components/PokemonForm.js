import React, { useState } from "react"; // useState is being imported
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [formData, setFormData] = useState({     // we are setting the input data from form. It will have an object with the following
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  function handleChange(e) {  // this fn sets the formData to be the value of the target input
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit() { // this fn sets the values of newPokemon and also makes a POST request to json file
    // Semantic UI React's Form component handles the preventDefault automatically!
    const newPokemon = {           // we are setting the values of the newPokemon here
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    fetch("http://localhost:3001/pokemon", { // this does a POST request of the newPokemon added through form
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon), // newPokemon is being passed here
    })
      .then((res) => res.json())
      .then(onAddPokemon)    // onAddPokemon is being passed here
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit} // handleSubmit is being passed here
        // onSubmit={() => {
        //   console.log("submitting form...");
        // }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name}        // value is being set here
            onChange={handleChange}     // onChange is being passed here along with handleChange
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp}          // value is being set here
            onChange = {handleChange}   // onChange is being passed here along with handleChange
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}    // value is being set here
            onChange = {handleChange}   // onChange is being passed here along with handleChange
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}     // value is being set here
            onChange = {handleChange}   // onChange is being passed here along with handleChange
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

// test post with the following data
// name: Bulbasaur
// hp: 20
// front: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// back: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png

export default PokemonForm;
