import React from "react";

function Search({ searchTerm, onChangeSearch }) { //search and onChangeSearch are being passed from pokemonPage. search is being passed as a value to input below
  
  function handleChange (e) {     // this is an event handler being passed to the input value below
    onChangeSearch(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value = {searchTerm} onChange = {handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
